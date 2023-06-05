const throttle = require('lodash.throttle');

const form = document.querySelector(".feedback-form");
const data = JSON.parse(localStorage.getItem("feedback-form-state")) ||{
    email:'',
    message:'',
};
const input = document.querySelector("input");
input.value = data.email;
const textarea = document.querySelector("textarea");
textarea.value = data.message;
 

form.addEventListener('input', onFormInput);

function onFormInput(evt) {
    if (evt.target.nodeName === 'INPUT') {
        data.email = evt.target.value
    };

    if (evt.target.nodeName === 'TEXTAREA') {
        data.message = evt.target.value
    };

    localStorage.setItem("feedback-form-state", JSON.stringify(data));
};

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")))
    event.currentTarget.reset()
    localStorage.removeItem("feedback-form-state");
};
