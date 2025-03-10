// Получаем элементы
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login-button');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

// Функция для проверки email
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Функция для проверки полей при нажатии кнопки
function validateInputs() {
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  let isValid = true;

  // Проверяем email
  if (!validateEmail(emailValue)) {
    emailError.textContent = 'Incorrect email'; // Устанавливаем сообщение об ошибке
    emailError.classList.add('active'); // Делаем сообщение видимым
    emailInput.classList.add('error'); // Добавляем класс ошибки
    isValid = false;
  } else {
    emailError.textContent = ''; // Очищаем сообщение
    emailError.classList.remove('active'); // Скрываем сообщение
    emailInput.classList.remove('error'); // Убираем класс ошибки
  }

  // Проверяем пароль
  if (passwordValue === '') {
    passwordError.textContent = 'Incorrect password'; // Устанавливаем сообщение об ошибке
    passwordError.classList.add('active'); // Делаем сообщение видимым
    passwordInput.classList.add('error'); // Добавляем класс ошибки
    isValid = false;
  } else {
    passwordError.textContent = ''; // Очищаем сообщение
    passwordError.classList.remove('active'); // Скрываем сообщение
    passwordInput.classList.remove('error'); // Убираем класс ошибки
  }

  return isValid;
}

// Обработчик события на кнопку "Log in"
loginButton.addEventListener('click', (event) => {
  event.preventDefault(); // Предотвращаем стандартное поведение кнопки

  if (validateInputs()) {
    // Если все поля валидны, перенаправляем пользователя на следующую страницу
    window.location.href = './sign-in.html'; // Замените на нужный URL
  }
});