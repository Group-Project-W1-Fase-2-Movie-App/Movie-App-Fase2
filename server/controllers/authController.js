const Model = require('../models/').Users
const { sign } = require('../helpers/jwt-helper.js')
const { verify } = require('../helpers/password-handler.js')
const errHandler = require('../middlewares/errorHandler')
const {OAuth2Client} = require('google-auth-library');
const { randomize } = require('../helpers/randomize-helper.js')


class authController {
    static login(request, response, next) {
        if (request.body.email) {
            Model.findOne({
                where: {
                    email: request.body.email
                }
            })
                .then(data => {
                    if (data) {
                        if (request.body.password) {
                            if (verify(request.body.password, data.password)) {
                                let returnData = authController.tokenAssign(data.id, data.email)
                                response.status(200).json({ success: true, data:returnData })
                            } else {
                                next({ code: 401, msg: 'invalid email or password' })
                            }
                        } else {
                            next({ code: 401, msg: 'invalid email or password' })
                        }
                    } else {
                        next({ code: 401, msg: 'invalid email or password' })
                    }
                })
                .catch(err => {
                    if (err.msg) {
                        next({ code: 400, msg: err.msg })
                    } else {
                        next(err)
                    }
                })
        } else {
            next({
                code: 401,
                msg: "Invalid Email or Password"
            })
        }
    }

    static register(req, res, next) {
        const { name, email, password } = req.body
        const newUser = { name, email, password }

        Model.create(newUser)
            .then(user => {
                const { id, email } = user
                res.status(201).json({ message: "ceate new user success", id, name, email })
            })
            .catch(err => {
                if (err.name === 'SequelizeUniqueConstraintError') {
                    next({ code: 400, name: err.name, arrErrors: err.errors })
                } else {
                    next({ code: 500, msg: 'internal server error' })
                }
            })
    }

    static googleLogin(request, response, next) {
        const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
        async function verify() {
            // console.log(request.body)
            const ticket = await client.verifyIdToken({
                idToken: request.body.token,
                audience: process.GOOGLE_CLIENT_ID, 
            });
        const payload = ticket.getPayload();
        // console.log(payload)
        Model.findOne({
            where: {
                email: payload.email
            }
        })
            .then(data => {
                if (data) {
                    // console.log(data.id)
                    // console.log(data.email)
                    let returnData = authController.tokenAssign(data.id, data.email)
                    response.status(200).json({ success: true, data: returnData })
                }else{
                    let pass = randomize()
                    Model.create({
                        email: payload.email,
                        name: payload.name,
                        password: pass
                    },{returning: true})
                    .then(data => {
                        let returnData = authController.tokenAssign(data.id, data.email)
                        response.status(200).json({ success: true, data: returnData })
                    })
                    .catch(err => {
                        next({ code: 500, msg: 'internal server error' })
                    })
                }
            })
        const userid = payload['sub'];
        // If request specified a G Suite domain:
        const domain = payload['hd'];
        // console.log(payload)
        }
        // console.log(request.body)
        verify().catch(console.error);
        // console.log(request.body,token)
    }
    static tokenAssign(id, email) {
        const token = sign(
            {
                id: id,
                email: email
            })
        let data = {
            id: id,
            email: email,
            access_token: token
        }
        return data
    }
}



module.exports = authController