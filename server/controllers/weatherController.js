const axios = require('axios');
const errorHandler = require('../middlewares/errorHandler')


class WeatherController {
  static getWeather(req, res, next) {
    let city = req.body.city || 'jakarta'
    axios({
      method: 'get',
      url: `http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${city}&aqi=no`
    })
      .then(response => {
        res.status(200).json(response.data)
      })
      .catch(err => {
        next({ code: 500, msg: 'internal server errors' })
      })
  }
}


module.exports = WeatherController