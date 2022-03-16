$(document).on('submit', "#edit_user_form", function(e){
    e.preventDefault();
    let formData = {
        'f_name': $('#firstName').val(),
        'l_name': $('#lastName').val(),
        'email': $('input[name=myEmail]').val(),
        'country': $('#country').val(),
        'address': $('#address').val(),
        'contact': $('#contact').val(),
        'password': $('#floatingPassword').val(),
        'csrfmiddlewaretoken': $('input[name=csrfmiddlewaretoken]').val()
    };
    console.log(formData)
    $.ajax({
        type:'POST',
        // url:"/createuser/",
        data: formData,
        encode: true,
        success: function(){
        }
        
    })
})




$(document).on('submit', "#edit_enrollment_form", function(e){
    e.preventDefault();
    let formData = {
        'bundle': $('#bundles').val(),
        'date': $('#kt_daterangepicker_3').val(),
        'csrfmiddlewaretoken': $('input[name=csrfmiddlewaretoken]').val()
    };
    console.log(formData)
    $.ajax({
        type:'POST',
        // url:"/createuser/",
        data: formData,
        encode: true,
        success: function(){
        }
        
    })
})


$(document).on('submit', "#edit_courses_form", function(e){
    e.preventDefault();
    let formData = {
        'course': $('#courses').val(),
        'date': $('#kt_daterangepicker_7').val(),
        'csrfmiddlewaretoken': $('input[name=csrfmiddlewaretoken]').val()
    };
    console.log(formData)
    $.ajax({
        type:'POST',
        // url:"/createuser/",
        data: formData,
        encode: true,
        success: function(){
        }
        
    })
})