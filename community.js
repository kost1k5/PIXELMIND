document.addEventListener('DOMContentLoaded', function() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchIcon = document.getElementById('searchIcon');
    const cards = document.querySelectorAll('.card');
  
    function performSearch(query) {
      const lowerCaseQuery = query.toLowerCase();
  
      cards.forEach((card) => {
        const cardName = card.getAttribute('data-name').toLowerCase();
        if (cardName.includes(lowerCaseQuery)) {
          card.style.display = 'block'; 
        } else {
          card.style.display = 'none'; 
        }
      });
    }
  
    searchIcon.addEventListener('click', function () {
      const query = searchInput.value.trim();
      performSearch(query);
    });
  
    searchInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        const query = searchInput.value.trim();
        performSearch(query);
      }
    });
  
    let currentOpenCard = null; // Переменная для текущей открытой карточки
  
    // Card opening functionality
    const openCardBlock = document.querySelector('.open-card');
    const overlay = document.querySelector('.overlay');
    const openCardTitle = document.getElementById('open-card-title');
    const openCardImage = document.getElementById('open-card-image');
  
    // Data for the cards
    const cardData = {
      "cartoon girl": {
        title: "Сильная мультяшная девушка с татуировками",
        image: "./assets/cartoon-girl.png",
        description: "Описание для мультяшной девушки"
      }
      
    };
  
    function updateCardInfo(cardName) {
      const data = cardData[cardName];
      if (data) {
        if (openCardTitle) { // Проверка на null
          openCardTitle.textContent = data.title;
        } else {
          console.error('Element with id "open-card-title" not found.');
        }
        if (openCardImage) { // Проверка на null
          openCardImage.src = data.image;
        } else {
          console.error('Element with id "open-card-image" not found.');
        }
      }
    }
  
    function closeCardInfo() {
      openCardBlock.style.display = 'none';
      overlay.style.display = 'none';
      currentOpenCard = null; // Сбрасываем текущую открытую карточку
    }
  
    function openCardInfo(card) {
      if (currentOpenCard) {
        closeCardInfo(); // Закрываем предыдущую карточку
      }
  
      const cardName = card.getAttribute('data-name');
      if (cardName) {
         updateCardInfo(cardName);
        openCardBlock.style.display = 'flex';
        overlay.style.display = 'flex';
        currentOpenCard = card; // Обновляем текущую открытую карточку
      }
    }
  
    cards.forEach(card => {
      card.addEventListener('click', function(event) {
        event.stopPropagation(); // Предотвращаем всплытие события
        openCardInfo(card);
      });
    });
  
    const closeButton = document.querySelector('.close-button');
    if (closeButton) {
      closeButton.addEventListener('click', closeCardInfo);
    }
  
    if (overlay) {
      overlay.addEventListener('click', function(event) {
        if (event.target === overlay) { // Закрываем только если кликнули на оверлей, а не на карточку
          closeCardInfo();
        }
      });
    }
  });