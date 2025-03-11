function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  // Универсальная функция для валидации формы
  function validateForm(emailInput, passwordInput, emailError, passwordError) {
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
  
    let isValid = true;
  
    // Проверяем email
    if (!validateEmail(emailValue)) {
      emailError.textContent = 'Incorrect email';
      emailError.classList.add('active');
      emailInput.classList.add('error');
      isValid = false;
    } else {
      emailError.textContent = '';
      emailError.classList.remove('active');
      emailInput.classList.remove('error');
    }
  
    // Проверяем пароль
    if (passwordValue === '') {
      passwordError.textContent = 'Incorrect password';
      passwordError.classList.add('active');
      passwordInput.classList.add('error');
      isValid = false;
    } else {
      passwordError.textContent = '';
      passwordError.classList.remove('active');
      passwordInput.classList.remove('error');
    }
  
    return isValid;
  }