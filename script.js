// DOM
const nameError = document.getElementById('name-error');
const phoneError = document.getElementById('phone-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const submitError = document.getElementById('submit-error');
const nameInput = document.getElementById('contact-name');
const phoneInput = document.getElementById('contact-phone');
const emailInput = document.getElementById('contact-email');
const messageInput = document.getElementById('contact-message');
const btnSubmit = document.getElementById('btn-submit');

// Event Listeners
nameInput.addEventListener('keyup', function () {
  validateName();
});
phoneInput.addEventListener('keyup', function () {
  validatePhone();
});
emailInput.addEventListener('keyup', function () {
  validateEmail();
});
messageInput.addEventListener('keyup', function () {
  validateMessage();
});
btnSubmit.addEventListener('click', function () {
  return validateForm();
});

// Function Validatons
function validateName() {
  const name = nameInput.value.trim();

  if (name.length === 0) {
    nameError.innerHTML = 'Name is required';
    return false;
  }
  if (
    !name.match(/^[A-Za-z]+(?:['-][A-Za-z]+)*\s+[A-Za-z]+(?:['-][A-Za-z]+)*$/)
  ) {
    nameError.innerHTML = 'Write full name (e.g., John Doe)';
    return false;
  }

  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validatePhone() {
  const phone = phoneInput.value.trim();

  if (phone.length === 0) {
    phoneError.innerHTML = 'Phone no is required';
    return false;
  }
  if (!phone.match(/^[0-9]+$/)) {
    phoneError.innerHTML = 'Only digits please';
    return false;
  }
  if (phone.length !== 10) {
    phoneError.innerHTML = 'Phone no should be 10 digits';
    return false;
  }

  phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateEmail() {
  const email = emailInput.value.trim();

  if (email.length === 0) {
    emailError.innerHTML = 'Email is required';
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = 'Email Invalid';
    return false;
  }

  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateMessage() {
  const message = messageInput.value.trim();
  const required = 30;
  const remaining = required - message.length;

  if (remaining > 0) {
    messageError.innerHTML = remaining + ' more charachters required';
    return false;
  }

  messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateForm() {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    submitError.style.display = 'block';
    submitError.innerHTML = 'Please fix error to submit';
    setTimeout(() => {
      submitError.style.display = 'none';
    }, 3000);
    return false;
  }
}
