const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login-button');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

// Обработчик события на кнопку "Log in"
if (loginButton) {
  document.getElementById('sign-in-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвращаем стандартную отправку формы

    if (validateForm(emailInput, passwordInput, emailError, passwordError)) {
      // Если все поля валидны, перенаправляем пользователя на следующую страницу
      window.location.href = './landing.html'; // Замените на нужный URL
    }
  });
}