import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('input', throttle(onInput, 500));
formEl.addEventListener('submit', submitForm);


const FEEDBACK_FORM_KEY = 'feedback-form-state';
const data = {};
let localData;

getLocalData();

function getLocalData() {
  try {
    localData = JSON.parse(localStorage.getItem(FEEDBACK_FORM_KEY));
  } catch (err) {
    console.log(err.massage);
  }

  if (!localData) {
    return;
  }

  setToForm(localData);
}

function onInput(e) {
  data[e.target.name] = e.target.value.trim();

  setToLocalStorage();
}
function submitForm(e) {
  e.preventDefault();

  console.log(localData);

  formEl.reset();
  
  localStorage.removeItem(FEEDBACK_FORM_KEY);
}

function setToLocalStorage() {
  localStorage.setItem(FEEDBACK_FORM_KEY, JSON.stringify(data));
}

function setToForm({ email, message }) {
  formEl.elements.email.value = email;

  formEl.elements.message.value = message;
}
