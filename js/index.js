console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosSuccess = document.querySelector('[data-js="success"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function hideTosSuccess() {
  tosSuccess.setAttribute("hidden", "");
}

function showTosSuccess() {
  tosSuccess.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  if (tosCheckbox.checked) {
    hideTosError();
    showTosSuccess();
  } else {
    showTosError();
    hideTosSuccess();
  }
  // --^-- write your code here --^--
  // eslint-disable-next-line no-alert
  // alert("Form submitted");
});
