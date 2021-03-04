$(document).ready(() => {
  $("#button-register").on("click", (e) => {
    e.preventDefault();
    register();
  })

});



function register() {
  const name = $("#name").val();
  const email = $("#email").val();
  const password = $("#password").val();

  $.ajax({
    url: 'http://localhost:3000/register',
    method: 'POST',
    data: {
      name, email, password
    }
  })
    .done(response => {
      console.log(response)
    })
    .fail(err => {
      console.log(err)
    })
    .always(() => {
      $("#name").val("");
      $("#email").val("");
      $("#password").val("");
    })
}

