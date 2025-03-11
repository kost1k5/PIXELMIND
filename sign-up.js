const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const signUpButton = document.getElementById('sign-up-button');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

if (signUpButton) {
  document.getElementById('sign-up-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    if (validateForm(emailInput, passwordInput, emailError, passwordError)) {
      window.location.href = './sign-in.html';
    }
  });
}