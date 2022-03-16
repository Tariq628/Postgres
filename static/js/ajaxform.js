$(document).on("submit", "#kt_modal_update_user_form", function (e) {
  e.preventDefault();
  $.ajax({
    type: "POST",
    url: "{% url 'test' %}",
    data: JSON.stringify({
      firstName: $("#firstName").val(),
      lastName: $("#lastName").val(),
      csrfmiddlewaretoken: $("input[name=csrfmiddlewaretoken]").val(),
    }),
    success: function (e) {
      document.getElementById("kt_modal_update_user_form").reset();
    },
  });
});

// Begin Edit User Forms (View.html)

$(document).on("submit", "#edit_user_form", function (e) {
  e.preventDefault();
  $.ajax({
    type: "POST",
    url: "{% url 'useredit' %}",
    data: JSON.stringify({
      firstName: $("#firstName").val(),
      lastName: $("#lastName").val(),
      email: $("#email").val(),
      country: $("#country").val(),
      address: $("#address").val(),
      contact: $("#contact").val(),
      signedIn: $("#signedIn").val(),
      floatingPassword: $("#floatingPassword").val(),
      resetbtn: $("#resetbtn").val(),

      csrfmiddlewaretoken: $("input[name=csrfmiddlewaretoken]").val(),
    }),
    success: function (e) {
      document.getElementById("edit_user_form").reset();
    },
  });
});

$(document).on("submit", "#edit_enrollment_form", function (e) {
  e.preventDefault();
  $.ajax({
    type: "POST",
    url: "{% url 'useredit' %}",
    data: JSON.stringify({
      bundles: $("#bundles").val(),
      date: $("#kt_daterangepicker_3").val(),

      csrfmiddlewaretoken: $("input[name=csrfmiddlewaretoken]").val(),
    }),
    success: function (e) {
      document.getElementById("edit_enrollment_form").reset();
    },
  });
});

$(document).on("submit", "#edit_courses_form", function (e) {
  e.preventDefault();
  $.ajax({
    type: "POST",
    url: "{% url 'useredit' %}",
    data: JSON.stringify({
      courses: $("#courses").val(),
      date: $("#kt_daterangepicker_3").val(),

      csrfmiddlewaretoken: $("input[name=csrfmiddlewaretoken]").val(),
    }),
    success: function (e) {
      document.getElementById("edit_courses_form").reset();
    },
  });
});

// End Edit User Forms (View.html)
