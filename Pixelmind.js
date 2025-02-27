// Находим все селекты с классом custom-select
const customSelects = document.querySelectorAll('.custom-select');

// Обрабатываем событие открытия/закрытия и изменения для каждого селекта
customSelects.forEach((select) => {
  const wrapper = select.closest('.select-wrapper'); // Находим обёртку для текущего селекта

  select.addEventListener('click', () => {
    // Переключаем класс "open" для обёртки (для поворота стрелки)
    wrapper.classList.toggle('open');

    // Меняем цвет текста опций при открытии селекта
    const options = select.options;
    for (let i = 0; i < options.length; i++) {
      if (options[i].value === '') {
        options[i].style.color = 'rgba(255, 255, 255, 0.5)'; // Оставляем серым текст "Choose"
      } else {
        options[i].style.color = 'var(--color-white)'; // Делаем белыми остальные опции
      }
    }
  });

  select.addEventListener('blur', () => {
    // Убираем класс "open" при потере фокуса
    wrapper.classList.remove('open');
  });

  select.addEventListener('change', () => {
    if (select.value !== '') {
      select.style.color = 'var(--color-white)'; // Изменяем цвет текста на белый при выборе опции
    } else {
      select.style.color = 'rgba(255, 255, 255, 0.5)'; // Возвращаем цвет текста к заглушке
    }
  });
});
document.getElementById('customButton').addEventListener('click', function() {
  document.getElementById('file').click();
});

document.getElementById('file').addEventListener('change', function() {
  // Проверьте, что форма отправляется на правильный URL
  document.getElementById('fileForm').submit();
});