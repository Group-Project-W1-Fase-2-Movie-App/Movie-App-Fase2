const axios = require('axios')

class MovieController{
  static moviePopular(req, res, next){
    let page = +req.body.page || 1
    axios({
      url: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_MOVIE_KEY}&language=en-US&page=${page}`,
      method: 'GET'
    })
    .then(data => {
      res.status(200).json(data.data)
    })
    .catch(err => {
      next({ code: 500, msg: 'internal server errors' })
    })
  }

  static sessionTmdb(req, res, next){ //ga kepake keknya
    axios({
      url: `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${process.env.API_MOVIE_KEY}`,
      method: 'GET'
    })
    .then(session => {
      // res.status(200).json(session.data)
      // {
      //   "success": true,
      //   "guest_session_id": "c33743997273bfa22570dffc662bd47a",
      //   "expires_at": "2021-03-05 13:21:35 UTC"
      // }
    })
    .catch(err => {
      next(err)
    })
  }

  static movieDetails(req, res, next){
    let movieId = +req.params.id
    axios({
      url: `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_MOVIE_KEY}&language=en-US`,
      method: 'GET'
    })
    .then(movie => {
      res.status(200).json(movie.data)
    })
    .catch(err => {
      next(err)
    })
  }

  static searchMovie(req, res, next){
    let { keyword } = req.body
    axios({
      url: `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_MOVIE_KEY}&language=en-US&query=${keyword}&page=1&include_adult=false`,
      method: 'GET'
    })
    .then(data => {
      res.status(200).json(data.data)
    })
    .catch(err => {
      next(err)
    })
  }

  static movieNew(req, res, next){
    axios({
      url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_MOVIE_KEY}&language=en-US&page=1`,
      method: 'GET'
    })
    .then(data => {
      res.status(200).json(data.data)
    })
    .catch(err => {
      next(err)
    })
  }

  static movieToprated(req, res, next){
    axios({
      url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_MOVIE_KEY}&language=en-US&page=1`,
      method: 'GET'
    })
    .then(data => {
      res.status(200).json(data.data)
    })
    .catch(err => {
      next(err)
    })
  }

  static movieTrending(req, res, next){
    axios({
      url: `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_MOVIE_KEY}`,
      method: 'GET'
    })
    .then(data => {
      res.status(200).json(data.data)
    })
    .catch(err => {
      next(err)
    })
  }
}

module.exports = MovieController