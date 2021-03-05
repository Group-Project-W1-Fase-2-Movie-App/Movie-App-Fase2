$(document).ready(() => {
  fetchDataWeather()
})


function fetchDataWeather() {
  $.ajax({
    url: 'http://localhost:3000/weather',
    method: 'GET',
    body: {
      city: localStorage.city,
    },
  })
  .done(response => {
    console.log(response);
    const currentWeather = response.current.condition;
    $("")
    


  })
  .fail(err => {
    console.log(err)
  })

}

