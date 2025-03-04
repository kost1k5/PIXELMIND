document.addEventListener('DOMContentLoaded', function() {
  // Обработка селектов
  const customSelects = document.querySelectorAll('.custom-select');
  customSelects.forEach((select) => {
    const wrapper = select.closest('.select-wrapper');
    if (wrapper) {
      select.addEventListener('click', () => {
        wrapper.classList.toggle('open');
        const options = select.options;
        for (let i = 0; i < options.length; i++) {
          options[i].style.color = options[i].value === '' 
            ? 'rgba(255, 255, 255, 0.5)' 
            : 'var(--color-white)';
        }
      });

      select.addEventListener('blur', () => {
        wrapper.classList.remove('open');
      });

      select.addEventListener('change', () => {
        select.style.color = select.value !== '' 
          ? 'var(--color-white)' 
          : 'rgba(255, 255, 255, 0.5)';
      });
    }
  });

 
  const fileInput = document.getElementById('file-input');
  const uploadButton = document.getElementById('upload-button');

  if (fileInput && uploadButton) {
    fileInput.addEventListener('change', function(event) {
      const file = event.target.files[0];
      uploadButton.textContent = file ? file.name : 'Upload';
    });
  } else {
    console.error('Элемент "file-input" или "upload-button" не найден.');
  }
});
document.addEventListener('DOMContentLoaded', function() {
  const ratingContainers = document.querySelectorAll('.rating-container');

  ratingContainers.forEach(container => {
    const ratingUp = container.querySelector('.rating-up');
    const ratingDown = container.querySelector('.rating-down');
    const ratingValue = container.querySelector('.rating-value');
    let rating = parseInt(ratingValue.textContent);
    let hasRated = false; // Добавляем флаг

    ratingUp.addEventListener('click', function() {
      if (!hasRated) {
        rating++;
        ratingValue.textContent = rating;
        hasRated = true; // Устанавливаем флаг
      }
    });

    ratingDown.addEventListener('click', function() {
      if (!hasRated && rating > 0) {
        rating--;
        ratingValue.textContent = rating;
        hasRated = true; // Устанавливаем флаг
      }
    });
  });
});
document.addEventListener('DOMContentLoaded', function() {
 
  const likeButtons = document.querySelectorAll('.like-button');


  likeButtons.forEach(button => {
    button.addEventListener('click', function() {
     
      button.classList.toggle('liked');
    });
  });
});