// Handle international prefixes, format phone input field
// Uses intl-tel-input plugin
const phoneInputField = document.querySelector("#contact");
const phoneInput = window.intlTelInput(phoneInputField, {
  // https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
  preferredCountries: ["pk", "co", "in", "de"],
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

const info = document.querySelector(".alert-info");
const error = document.querySelector(".alert-error");

function process(event) {
  event.preventDefault();

  const phoneNumber = phoneInput.getNumber();

  info.style.display = "none";
  error.style.display = "none";

  if (phoneInput.isValidNumber()) {
    info.style.display = "";
    info.innerHTML = `Phone number in E.164 format: <strong>${phoneNumber}</strong>`;
  } else {
    error.style.display = "";
    error.innerHTML = `Invalid phone number.`;
  }
}

const form = document.getElementById("kt_modal_update_user_form");
form.addEventListener("submit", process);
