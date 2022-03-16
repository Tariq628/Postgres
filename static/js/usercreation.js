
function generate(){

    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZacdefghijklnopqrstuvwxyz0123456789@#$%^&*+_><?";

    var passwordLength = 16;

    var password = "";


    for (var i=0; i<passwordLength; i++){

        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber+1);

    }
    let pass1 = document.getElementById("password1")
    let pass2 = document.getElementById("password2")
    pass1.value = password;
    pass2.value = password;
    pass1.type = "text";
    pass2.type = "text";
}


$(document).on('submit', "#kt_modal_update_user_form", function(e){
    e.preventDefault();
    let formData = {
        'f_name': $('input[name=f_name]').val(),
        'l_name': $('input[name=l_name]').val(),
        'email': $('input[name=email]').val(),
        'contact': $('input[name=contact]').val(),
        'pass1': $('input[name=pass1]').val(),
        'pass2': $('input[name=pass2]').val(),
        'country': $('input[name=country]').val(),
        'address': $('input[name=address]').val(),
        'csrfmiddlewaretoken': $('input[name=csrfmiddlewaretoken]').val()
    };
    console.log(formData)
    $.ajax({
        type:'POST',
        url:"/createuser/",
        data: formData,
        encode: true,
        success: function(){

        }

    })
})


