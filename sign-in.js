// const emailInput = document.getElementById('email');
// const passwordInput = document.getElementById('password');
// const loginButton = document.getElementById('login-button');
// const emailError = document.getElementById('email-error');
// const passwordError = document.getElementById('password-error');

// // Функция для проверки email
// function validateEmail(email) {
//   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return regex.test(email);
// }

// // Функция для проверки полей
// function validateInputs() {
//   const emailValue = emailInput.value.trim();
//   const passwordValue = passwordInput.value.trim();

//   let isEmailValid = false;
//   let isPasswordValid = false;

//   // Валидация email
//   if (emailValue === '') {
//     emailError.textContent = 'Email is required';
//     emailError.classList.add('active');
//     emailInput.classList.add('error'); // Добавляем класс ошибки
//   } else if (!validateEmail(emailValue)) {
//     emailError.textContent = 'Incorrect email';
//     emailError.classList.add('active');
//     emailInput.classList.add('error'); // Добавляем класс ошибки
//   } else {
//     emailError.textContent = '';
//     emailError.classList.remove('active');
//     emailInput.classList.remove('error'); // Убираем класс ошибки
//     isEmailValid = true;
//   }

//   // Валидация пароля
//   if (passwordValue === '') {
//     passwordError.textContent = 'Password is required';
//     passwordError.classList.add('active');
//     passwordInput.classList.add('error'); // Добавляем класс ошибки
//   } else {
//     passwordError.textContent = '';
//     passwordError.classList.remove('active');
//     passwordInput.classList.remove('error'); // Убираем класс ошибки
//     isPasswordValid = true;
//   }

//   // Активируем/деактивируем кнопку
//   loginButton.disabled = !(isEmailValid && isPasswordValid);
// }

// // Слушаем события ввода в полях
// emailInput.addEventListener('input', validateInputs);
// passwordInput.addEventListener('input', validateInputs);