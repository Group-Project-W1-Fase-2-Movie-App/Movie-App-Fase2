const baseUrl = 'http://localhost:3000'

$(document).ready(function(){

  // jQuery methods go here...
  fetchMovieCarousel()
  fetchUpcoming()
  fetchToprated()
  fetchTrending()
});

function fetchMovieCarousel(){
  $.ajax({
    url: baseUrl + '/moviePopular',
    method: 'GET'
  })
  .done(resp => {
    for(let i = 0; i < 2; i++){
      $("#kanan-carousel").append(
        `
        <div class="col-sm-6 col-md-12">
          <div class="latest-movie">
          <a href="#" onclick="goToDetails(${resp.results[i].id})"><img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${resp.results[i].poster_path}"></a>
          </div>
        </div>
        `
      )
    }

    for(let i = 2; i < 6; i++){
      $("#bawah-carousel").append(
        `
        <div class="col-sm-6 col-md-3">
          <div class="latest-movie">
            <a href="#" onclick="goToDetails(${resp.results[i].id})"><img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${resp.results[i].poster_path}"></a>
          </div>
        </div>
        `
      )
    }
    $("#carousel-main").append(
      `
        <div class="carousel-item active">
          <a href="#" onclick="goToDetails(${resp.results[7].id})"><img class="d-block w-100" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${resp.results[7].poster_path}" alt="First slide" style="height: 775px" ></a>
        </div>
      `
    )
    for(let i = 8; i < 12; i++){
      let count = ''
      if(i == 8){
        count = 'First'
      } else if( i == 9){
        count = 'Second'
      } else if( i == 10){
        count = 'Third'
      } else if( i == 11){
        count = 'Fourth'
      } else if( i == 12){
        count = 'Fifth'
      }
      $("#carousel-main").append(
        `
          <div class="carousel-item">
            <img class="d-block w-100" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${resp.results[i].poster_path}" alt="${count} slide"
              style="height: 640px" 
            >
          </div>
        `
      )
      $("#carousel-img").attr("src", `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${resp.results[i].poster_path}`);
    }
  })
  .fail(err => {
    console.log(err)
  })
}

function fetchUpcoming(){
  $.ajax({
    url: baseUrl + '/movieNew',
    method: 'GET'
  })
  .done(data => {
    // console.log(data)
    for(let i = 0; i < 4; i++){
      $("#upcoming").append(
        `
          <li>
            <div class="date">${data.results[i].release_date}</div>
            <h2 class="entry-title"><a href="#" onclick="goToDetails(${data.results[i].id})">${data.results[i].title}</a></h2>
          </li>
        `
      )
    }
  })
  .fail(err => {
    console.log(err,'masuk sinimas')
  })
}

function fetchToprated(){
  $.ajax({
    url: baseUrl + '/movieToprated',
    method: 'GET'
  })
  .done(data => {
    // console.log(data)
    for(let i = 0; i < 4; i++){
      $("#toprated").append(
        `
          <li>
            <div class="date">${data.results[i].vote_average}</div>
            <h2 class="entry-title"><a href="#" onclick="goToDetails(${data.results[i].id})">${data.results[i].title}</a></h2>
          </li>
        `
      )
    }
  })
  .fail(err => {
    console.log(err,'masuk sinimas')
  })
}

function fetchTrending(){
  $.ajax({
    url: baseUrl + '/movieTrending',
    method: 'GET'
  })
  .done(data => {
    // console.log(data)
    for(let i = 0; i < 4; i++){
      $("#trending").append(
        `
          <li>
            <div class="date">${data.results[i].vote_average}</div>
            <h2 class="entry-title">
              <a href="#" onclick="goToDetails(${data.results[i].id})">${data.results[i].title}
              </a>
            </h2>
          </li>
        `
      )
    }
  })
  .fail(err => {
    console.log(err)
  })
}

function goToDetails(movieId){
  $.ajax({
    url: baseUrl + '/movieDetails/' + movieId,
    method: 'GET' 
  })
  .done(resp => {
    // console.log(resp)
    $("#modalTitle").text(`${resp.title}`)
    $("p#modal-body").text(`${resp.overview}`)
    $("p#modal-body-popularity").text(`Popularity : ${resp.popularity}`)
    $("p#modal-body-relDate").text(`Release Date : ${resp.release_date}`)
    $("#modal-img").attr("src", `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${resp.poster_path}`);
    $('#exampleModal').modal('show')
  })
  .fail(err => {
    console.log(err)
  })
}