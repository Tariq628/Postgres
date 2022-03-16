let userInformation = [{
        name: "Tiger Nixon",
        email: "tiger2@gmail.com",
        phone: "+923115674899",
        date: "01/22/2022",
        bundle: [],
        country: "Pakistan",
    },
    {
        name: "Tariq Ahmed",
        email: "tiger@gmail.com",
        phone: "+923115674899",
        date: "01/16/2022",
        bundle: [],
        country: "Pakistan",
    },
    {
        name: "Umair Iqbal",
        email: "tariqahmed@gmail.com",
        phone: "+923115674899",
        date: "01/31/2022",
        bundle: [],
        country: "Pakistan",
    },
];
$("#kt_modal_update_user_form").submit(function(event) {
    event.preventDefault();
    let myBody = document.getElementById("myTableBody");
    let formData = {
        'searchValue': $('input[name=search]').val(),
    }
    let searchValue = formData.searchValue;
    userInformation.some(element => {
        if (element.email == searchValue) {
            sessionStorage.setItem("email", element.email);
            console.log(element.bundle);
            myBody.innerHTML = `
                <tr>
                <td>${element.name}</td>
                <td>${element.email}</td>
                <td>${element.phone}</td>
                <td>${element.date}</td>
                <td>${element.country}</td>
                </tr>
    `;
            return true;

        } else {
            myBody.innerHTML = "<p>There is no result</p>"
        }
    });
});


$("#kt_modal_update_user_form2").submit(function(event) {
    var bool = false;
    event.preventDefault();
    const myBody = document.getElementById("myTableBody2");
    myBody.innerHTML = "";
    let formData = {
        'searchBundle': $('select[name=searchBundle] :selected').text(),
        'myDate': $('input[name=myDate]').val(),
    }
    let email = sessionStorage.getItem("email");
    userInformation.some(element => {
        console.log(element.date == formData.myDate);
        if (email == element.email) {
            let bundleItems = [formData.searchBundle, formData.myDate];
            // console.log(bundleItems)
            element.bundle.push(bundleItems);
            element.bundle.forEach(myBundle => {
                myBody.innerHTML += `
                    <tr>
                    <td>${myBundle[0]}</td>
                    <td>${myBundle[1]}</td>
                    </tr>
        `;
    });
    bool = true;
    return bool;
}
});
if(!bool) {
    myBody.innerHTML = "<p>There is no result</p>";
}
});