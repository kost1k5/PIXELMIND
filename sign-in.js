const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login-button');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

if (loginButton) {
  document.getElementById('sign-in-form').addEventListener('submit', 
   
    function(event) {
      event.preventDefault();
      
      if (validateForm(emailInput, passwordInput, emailError, passwordError)) {
        window.location.href = './landing.html';
      }
    }
  );
}