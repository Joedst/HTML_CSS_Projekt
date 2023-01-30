"use strict";

const firstNameEl = document.getElementById('customerFirstName');
const lastNameEl = document.getElementById('customerLastName');
const customerEmailEl = document.getElementById('customerEmail');
const customerPhoneEl = document.getElementById('customerPhone');
const formEl = document.getElementById('form');
const customerMessageEl = document.getElementById('messageId');
let myBtn = document.getElementById("idButton");


myBtn.addEventListener('click', (e) => {

    if (customerEmailEl.value === '' || customerEmailEl.value == null) {
        console.log("Button was clicked");
        console.log("User not entering contactable information")
        alert("Email have to be inserted so we may respond to you!");
    } else {
        console.log("Valid message sent");
        myBtn.innerHTML = "<h3> Message was sent!"
    }
}
)



