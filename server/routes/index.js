const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/authController.js')
const WeatherController = require('../controllers/weatherController')
const authentication = require('../middlewares/authentication')

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)


router.use(authentication)
router.get('/weather', WeatherController.getWeather)



module.exports = router