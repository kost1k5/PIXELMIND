const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const signUpButton = document.getElementById('sign-up-button');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

// Обработчик события на кнопку "Sign up"
if (signUpButton) {
  document.getElementById('sign-up-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвращаем стандартную отправку формы

    if (validateForm(emailInput, passwordInput, emailError, passwordError)) {
      // Если все поля валидны, перенаправляем пользователя на следующую страницу
      window.location.href = './sign-in.html'; // Замените на нужный URL
    }
  });
}