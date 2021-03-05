const baseURL = `http://localhost:3000/`;
$("document").ready(() => {
  checkLocalStorage();
  // fetchMovieCarousel();

  $("#register-link").on("click", (e) => {
    e.preventDefault();
    $('#loginPage').css('display','none')
    $('#registerPage').css('display','block')
    registration();
  });
  $("#login-link").on("click", (e) => {
    e.preventDefault();
    $('#loginPage').css('display','block')
    $('#registerPage').css('display','none')
  });

  $("#register").on("click", (e) => {
    e.preventDefault();
    registration();
  });
  $("#registerForm").on("submit", (e) => {
    e.preventDefault();
    registration();
  });
  $("#loginForm").on("submit", (e) => {
    e.preventDefault();
    login();
  });
  $('#logout').on('click',() => {
    signOut()
  })

  $("#btn-submit").on("click", (e) => {
    e.preventDefault();
    login();
  });

  $("#btn-logout").on("click", () => {
    logout();
  });

  $("#add-todo").on("click", (e) => {
    e.preventDefault();
    addTodo();
  });

  $("#btn-news").on("click", (e) => {
    e.preventDefault();
    newsList();
  });

  $("#add-submit").on("click", (e) => {
    e.preventDefault();
    addTodo();
  });

  $("#editTodo").on("click", (e) => {
    e.preventDefault();
    editTodo();
  });

  $("#edit-submit").on("click", (e) => {
    e.preventDefault();
    editTodo();
  });

  $("#back").on("click", (e) => {
    e.preventDefault();
    back();
  });
});

function registration() {
  $("#login-page").hide();
  $("#registration-form").show();
  let name = $("#name").val();
  let email = $("#email").val();
  let pass = $("#password").val();
  let password = pass

  $.ajax({
    url: baseURL + "register",
    method: "POST",
    data: { name, email, password },
  })
    .done((res) => {
      if (res.email) {
        login(res.email,password)
      } else {
        $("#login-page").hide();
        $("#registration-form").show();
      }
    })
    .fail((err) => console.log(err))
    .always(() => {
      $("#email").val("");
      $("#password").val("");
    });
}

function login(email = null, password = null) {
  $("#registration-form").hide();
  if (!email && !password) {
    email = $("#login-email").val();
    password = $("#login-password").val();
  }

  $.ajax({
    url: baseURL + "login",
    method: "POST",
    data: { email, password },
  })
    .done((res) => {
      localStorage.setItem("token", res.data.access_token);
      if (res) {
        $("#loginPage").hide();
        $("#registerPage").hide();
        $("#main-list").show();
        $('#site-content').show()
      }
    })
    .fail((err) => {
      console.log(err);
    })
    .always(() => {
      $("#login-email").val("");
      $("#login-password").val("");
    });
}

function onSignIn(googleUser) {
  $.ajax({
    url: baseURL + "googleLogin",
    method: "POST",
    data: {
      token: googleUser.getAuthResponse().id_token,
    },
  })
    .done((data) => {
      // console.log(data);
      if (data) {
        localStorage.setItem("token", data.data.access_token);
        if (data) {
          $("#loginPage").hide();
          $("#registerPage").hide();
          $("#main-list").show();
          $('#site-content').show()
        }
        $("#googleLogout").show();
      } else {
        $("#googleLogout").hide();
      }
    })
    .fail((err) => console.log(err));
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    logout()
    window.location.reload()
    console.log("User signed out.");
  });
}

function checkLocalStorage() {
  if (localStorage.token) {
    $("#loginPage, #registerForm").hide();
    $("#main-list").show();
    $('#site-content').css('display','block')
  } else {
    $("#login-page").show();
    $('#site-content').hide()
    $("#main-list, #registerPage").hide();
  }
}

function logout() {
  localStorage.removeItem("token");
  checkLocalStorage();
}
