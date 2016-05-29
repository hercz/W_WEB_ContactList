$('.flip').mouseenter(function () {
    $(this).find('.card').addClass('flipped').mouseleave(function () {
        $(this).removeClass('flipped');
    });

    return false;
});

(function loaddata() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var data = xhttp.responseText;
            var parsedData = JSON.parse(data);
            for (var key in parsedData) {
                var nameField = document.getElementById("name");
                nameField.innerHTML = parsedData[key].fname + " " + parsedData[key].lname;
                var emailField = document.getElementById("email");
                emailField.innerHTML = emailField.innerHTML + parsedData[key].email;
                var phoneField = document.getElementById("phone");
                phoneField.innerHTML = phoneField.innerHTML + parsedData[key].phone;
                var cityField = document.getElementById("city");
                cityField.innerHTML = cityField.innerHTML + parsedData[key].city;
                var addressField = document.getElementById("address");
                addressField.innerHTML = addressField.innerHTML + parsedData[key].address;
            }
        }
    };
    xhttp.open("GET", "http://www.filltext.com/?rows=1&pretty=true&fname={firstName}&lname={lastName}&city={city}&address={streetAddress}&email={email}&phone={phone}", true);
    xhttp.send();
})();