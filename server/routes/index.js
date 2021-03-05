const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/authController.js')
const WeatherController = require('../controllers/weatherController')
const MovieController = require('../controllers/movieController')
const authentication = require('../middlewares/authentication')

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.post('/googleLogin', AuthController.googleLogin)


router.get('/moviePopular', MovieController.moviePopular)
router.get('/movieNew', MovieController.movieNew)
router.get('/movieToprated', MovieController.movieToprated)
router.get('/movieTrending', MovieController.movieTrending)
router.get('/movieDetails/:id', MovieController.movieDetails)
router.use(authentication)
router.get('/weather', WeatherController.getWeather)




module.exports = router