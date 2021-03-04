const baseUrl = 'http://localhost:3000'

$(document).ready(function(){

  // jQuery methods go here...
  fetchMovieCarousel()
});

function fetchMovieCarousel(){
  $.ajax({
    url: baseUrl + '/moviePopular',
    method: 'GET'
  })
  .then(resp => {
    for(let i = 0; i < 2; i++){
      $("#kanan-carousel").append(
        `
        <div class="col-sm-6 col-md-12">
          <div class="latest-movie">
          <a href="#"><img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${resp.results[i].poster_path}"></a>
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
            <a href="#"><img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${resp.results[i].poster_path}"></a>
          </div>
        </div>
        `
      )
    }
  })
  .catch(err => {
    console.log(err)
  })
}