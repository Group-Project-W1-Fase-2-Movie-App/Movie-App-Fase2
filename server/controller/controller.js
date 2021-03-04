const axios = require('axios')

class Controller{
  static moviePopular(req, res, next){
    let  page  = +req.body.page || 1
    axios({
      url: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_MOVIE_KEY}&language=en-US&page=${page}`,
      method: 'GET'
    })
    .then(data => {
      // console.log(data.data.results.length)
      res.status(200).json(data.data)
    })
    .catch(err => {
      next(err)
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
    let { movieId } = req.body
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
}

module.exports = Controller