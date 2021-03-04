const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/authController.js')



router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.post('/googleLogin', AuthController.googleLogin)




module.exports = router