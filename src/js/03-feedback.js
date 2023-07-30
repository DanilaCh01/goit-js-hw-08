const throttle = require('lodash.throttle');

const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";
let data = {};

const updateFormState = throttle(() => {
  data[e.target.name] = e.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}, 500);

form.addEventListener('submit', onFormSubmit);
window.addEventListener('load', onLoad);


function onFormSubmit(event) {
  event.preventDefault();
console.log(data);
data = {};
event.currentTarget.reset();
localStorage.removeItem(STORAGE_KEY);
};

function onLoad() {
  try {
    const dJSON = localStorage.getItem(STORAGE_KEY);
    if (!dJSON) return;
    data = JSON.parse(dJSON);
    Object.entries(data).forEach(([key, val]) => {
      form.elements[key].value = val;
    });
  } catch (error) {
    console.log(error.message);
  };
};






// const throttle = require('lodash.throttle');

// const form = document.querySelector(".feedback-form");
// const input = document.querySelector("input");
// const textarea = document.querySelector("textarea");

// const updateFormState = throttle(() => {
//   const data = {
//     email: input.value,
//     message: textarea.value
//   };
    
//   localStorage.setItem("feedback-form-state", JSON.stringify(data));
// }, 500);

// form.addEventListener('input', onFormInput);
// form.addEventListener('submit', onFormSubmit);
// window.addEventListener('load', onLoad);

// function onFormInput() {
//   updateFormState();
// }

// function onFormSubmit(event) {
//   event.preventDefault();

//   if (input.value === '' || textarea.value === '') {
//     alert('Пожалуйста, заполните все поля');
//     return;
//     };

// console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
// event.currentTarget.reset();
// localStorage.removeItem("feedback-form-state");
// }

// function onLoad() {
//   const savedData = JSON.parse(localStorage.getItem("feedback-form-state"));

//   if (savedData) {
//     input.value = savedData.email;
//     textarea.value = savedData.message;
//   } else {
//     input.value = '';
//     textarea.value = '';
//   }
// }


// Сейв старого коду на всяк випадок ----------------------------------------------------------------------- //


// const throttle = require('lodash.throttle');

// const form = document.querySelector(".feedback-form");
// const data = JSON.parse(localStorage.getItem("feedback-form-state")) ||{
//     email:'',
//     message:'',
// };
// const input = document.querySelector("input");
// input.value = data.email;
// const textarea = document.querySelector("textarea");
// textarea.value = data.message;
 

// form.addEventListener('input', onFormInput);

// function onFormInput(evt) {
//     if (evt.target.nodeName === 'INPUT') {
//         data.email = evt.target.value
//     };

//     if (evt.target.nodeName === 'TEXTAREA') {
//         data.message = evt.target.value
//     };

//     localStorage.setItem("feedback-form-state", JSON.stringify(data));
// };

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//     event.preventDefault();
//     console.log(JSON.parse(localStorage.getItem("feedback-form-state")))
//     event.currentTarget.reset()
//     localStorage.removeItem("feedback-form-state");
// };
