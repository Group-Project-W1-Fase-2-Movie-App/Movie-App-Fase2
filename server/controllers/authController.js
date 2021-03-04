const Model = require('../models/').Users
const { sign } = require('../helpers/jwt-helper.js')
const { verify } = require('../helpers/password-handler.js')
const errHandler = require('../middlewares/errorHandler')


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
                                const token = sign(
                                    {
                                        id: data.id,
                                        email: data.email
                                    })
                                data = {
                                    id: data.id,
                                    email: data.email,
                                    access_token: token
                                }
                                response.status(200).json({ success: true, data })
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

        User.create(newUser)
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
}



module.exports = authController