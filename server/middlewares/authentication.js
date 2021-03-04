const { User } = require('../models')
const { verify } = require('../helpers/password-handler.js')


const authentication = (req, res, next) => {
  try {
    let { id, email } = verify(req.headers.access_token)
    // let id = +decode.id
    // let email = decode.email

    User.findByPk(+id)
      .then(user => {
        req.logginUser = { id: user.id, email: user.email }
        next()
      })
      .catch(err => {
        throw new Error()
      })
  }
  catch (error) {
    res.status(401).json(({ message: "Unauthorized user" }))
  }
}



module.exports = authentication 