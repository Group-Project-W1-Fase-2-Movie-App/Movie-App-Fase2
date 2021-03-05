const baseURL = `http://localhost:3000`;
$("document").ready(() => {
  checkLocalStorage();
  // fetchMovieCarousel();

  $("#register-link").on("click", (e) => {
    e.preventDefault();
    registration();
  });

  $("#register").on("click", (e) => {
    e.preventDefault();
    registration();
  });

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
  const email = $("#reg-email").val();
  const password = $("#reg-password").val();

  $.ajax({
    url: baseURL + "register",
    method: "POST",
    data: { email, password },
  })
    .done((res) => {
      if (res.email) {
        $("#login-page").show();
        $("#registration-form").hide();
      } else {
        $("#login-page").hide();
        $("#registration-form").show();
      }
    })
    .fail((err) => console.log(err))
    .always(() => {
      $("#reg-email").val("");
      $("#reg-password").val("");
    });
}

function login() {
  $("#registration-form").hide();
  const email = $("#email").val();
  const password = $("#password").val();

  $.ajax({
    url: baseURL + "login",
    method: "POST",
    data: { email, password },
  })
    .done((res) => {
      localStorage.setItem("token", res.token);
      if (res) {
        $("#login-page").hide();
        $("#main-list").show();
      }
    })
    .fail((err) => {
      console.log(err);
    })
    .always(() => {
      $("#email").val("");
      $("#password").val("");
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
    console.log("User signed out.");
  });
}

function checkLocalStorage() {
  if (localStorage.token) {
    $("#login-page, #registration-form").hide();
    $("#main-list").show();
  } else {
    $("#login-page").show();
    $("#main-list, #registration-form").hide();
  }
}

function logout() {
  localStorage.removeItem("token");
  checkLocalStorage();
}
