import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('input', throttle(onInput, 500));
formEl.addEventListener('submit', submitForm);

const FEEDBACK_FORM_KEY = 'feedback-form-state';
let data = {};

const onLoad = () => {
  try {
    const dataJSON = localStorage.getItem(FEEDBACK_FORM_KEY);
    if (!dataJSON) return;
    data = JSON.parse(dataJSON);
    Object.entries(data).forEach(([key, val]) => {
      formEl.elements[key].value = val;
    });
  } catch (err) {
    console.log(err.message);
  }
};

window.addEventListener('load', onLoad);

function onInput(e) {
  data[e.target.name] = e.target.value.trim();

  setToLocalStorage();
}
function submitForm(e) {
  e.preventDefault();

  console.log(data);

  data = {};

  formEl.reset();

  localStorage.removeItem(FEEDBACK_FORM_KEY);
}

function setToLocalStorage() {
  localStorage.setItem(FEEDBACK_FORM_KEY, JSON.stringify(data));
}
