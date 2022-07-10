const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const pass = document.getElementById('password');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  checkInputs();
});

function checkInputs() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passValue = pass.value.trim();

  if (
    firstNameValue === '' ||
    lastName.value === '' ||
    emailValue === '' ||
    passValue === ''
  ) {
    if (firstNameValue === '') {
      setError(firstName, 'First Name cannot be empty');
    } else {
      setSuccess(firstName);
    }

    if (lastNameValue === '') {
      setError(lastName, 'Last Name cannot be empty');
    } else {
      setSuccess(lastName);
    }

    if (emailValue === '') {
      setError(email, 'Looks like this is not an email');
    } else {
      setSuccess(email);
    }

    if (passValue === '') {
      setError(pass, 'Password field cannot be empty');
    } else {
      setSuccess(pass);
    }
  } else {
    location.reload();
    alert('Form Submitted Successfully');
  }
}

function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  small.innerText = message;

  formControl.className = 'form-control error';
  formControl.style.marginBottom = '1.5rem';
}

function setSuccess(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}
