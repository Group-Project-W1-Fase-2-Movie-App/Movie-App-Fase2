const router = require('express').Router()
const Controller = require('../controller/controller')

router.get('/movie', Controller.sessionTmdb)
router.get('/moviePopular', Controller.moviePopular)
router.get('/movieDetails', Controller.movieDetails)
router.get('/searchMovie', Controller.searchMovie)


module.exports = router