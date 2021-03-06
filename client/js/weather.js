$(document).ready(() => {
  fetchDataWeather()
})

function fetchDataWeather() {
  $.ajax({
    url: 'http://localhost:3000/weather',
    method: 'GET',
    headers: {
      access_token: localStorage.getItem('token')
    },
    body: {
      city: localStorage.city,
    },
  })
    .done(response => {
      console.log(response);
      const lastUpdate = response.current.last_updated
      const temperature = response.current.temp_c;
      const textWeather = response.current.condition.text;
      const imageURL = response.current.condition.icon;
      console.log(temperature)
      $("#lastUpdate").text(lastUpdate)
      $("#tempetature").text(temperature+ '°C')
      $("#textWeather").text(textWeather)
      $("#iconWeather").attr('src', imageURL)

    })
    .fail(err => {
      console.log(err)
    })
}

