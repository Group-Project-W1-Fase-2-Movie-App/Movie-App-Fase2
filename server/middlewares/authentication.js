const { Users } = require('../models')
const { verifyToken } = require('../helpers/jwt-helper.js')


const authentication = (req, res, next) => {

  let { id, email } = verifyToken(req.headers.access_token)
  try {
    // console.log(id, email)
    Users.findByPk(id)
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