document.addEventListener('DOMContentLoaded', function() {
  // Custom select handling
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

  // File upload handling
  const fileInput = document.getElementById('file-input');
  const uploadButton = document.getElementById('upload-button');

  if (fileInput && uploadButton) {
    fileInput.addEventListener('change', function(event) {
      const file = event.target.files[0];
      uploadButton.textContent = file ? file.name : 'Upload';
    });
  } else {
    console.error('Element "file-input" or "upload-button" not found.');
  }

  // Rating handling
  const ratingContainers = document.querySelectorAll('.rating-container');

  ratingContainers.forEach(container => {
    const ratingUp = container.querySelector('.rating-up');
    const ratingDown = container.querySelector('.rating-down');
    const ratingValue = container.querySelector('.rating-value');

    let rating = parseInt(ratingValue.textContent);
    let isChanged = false;

    ratingUp.addEventListener('click', function(event) {
      event.stopPropagation(); // Предотвращаем всплытие события
      if (!isChanged) {
        rating++;
        ratingValue.textContent = rating;
        isChanged = true;
      }
    });

    ratingDown.addEventListener('click', function(event) {
      event.stopPropagation(); // Предотвращаем всплытие события
      if (!isChanged && rating > 0) {
        rating--;
        ratingValue.textContent = rating;
        isChanged = true;
      }
    });
  });

  // Like button handling
  const likeButtons = document.querySelectorAll('.like-button');

  likeButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      event.stopPropagation(); // Предотвращаем всплытие события
      button.classList.toggle('liked');
    });
  });

  // Комментарий
  const commentButtons = document.querySelectorAll('span img[src="./assets/comment.svg"]');

  commentButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      event.stopPropagation(); // Предотвращаем всплытие события
      // Добавьте сюда обработку клика на комментарий, если нужно
    });
  });



  document.getElementById('menu-toggle').addEventListener('click', function() {
    var navbar = document.getElementById('navbar');
    var overlay = document.getElementById('overlay');
    navbar.classList.toggle('active');
    overlay.classList.toggle('active');
});

// Закрытие меню при клике на затемнение
document.getElementById('overlay').addEventListener('click', function() {
    var navbar = document.getElementById('navbar');
    var overlay = document.getElementById('overlay');
    navbar.classList.remove('active');
    overlay.classList.remove('active');
});

// Закрытие меню при клике на пункт меню
document.querySelectorAll('nav ul li a').forEach(function(link) {
    link.addEventListener('click', function() {
        var navbar = document.getElementById('navbar');
        var overlay = document.getElementById('overlay');
        navbar.classList.remove('active');
        overlay.classList.remove('active');
    });
});
window.addEventListener('scroll', function() {
  var header = document.getElementById('header');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 100) { // Изменяем стили после прокрутки на 100px
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
});


});