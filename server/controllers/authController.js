const Model = require('../models/').Users
const { sign } = require('../helpers/jwt-helper.js')
const { verify } = require('../helpers/password-handler.js')

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
                            response.status(200).json({success: true, data})
                        }else{
                            throw {msg: "invalid email or password"}
                        }
                    }else{
                        throw {msg: "invalid email or password"}
                    }
                }else{
                    throw {msg: "invalid email or password"}
                }
            })
            .catch(err => {
                if (err.msg) {
                    next({code: 400, msg: err.msg})
                }else{
                    next(err)
                }
            })
        }else{
            next({
                code:400,
                msg: "Invalid Email or Password"
            })
        }
    }
}
module.exports = authController