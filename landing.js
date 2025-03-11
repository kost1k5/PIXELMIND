document.addEventListener('DOMContentLoaded', function() {
  function performSearch(query) {
    const lowerCaseQuery = query.toLowerCase();
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      const cardName = card.getAttribute('data-name').toLowerCase();
      card.style.display = cardName.includes(lowerCaseQuery) ? 'block' : 'none';
    });
  }

  function updateCardInfo(cardName) {
    const cardData = {
      "cartoon girl": {
        title: "Strong redhead cartoon girl with tattoos",
        image: "./assets/cards-img/cartoon-girl.png",
        description: "Strong redhead cartoon girl with tattoos"
      }
    };
    const data = cardData[cardName];
    if (data) {
      const openCardTitle = document.getElementById('open-card-title');
      const openCardImage = document.getElementById('open-card-image');
      if (openCardTitle) openCardTitle.textContent = data.title;
      else console.error('Element with id "open-card-title" not found.');
      if (openCardImage) openCardImage.src = data.image;
      else console.error('Element with id "open-card-image" not found.');
    }
  }

  function closeCardInfo() {
    const openCardBlock = document.querySelector('.open-card');
    const overlay = document.querySelector('.overlay');
    openCardBlock.style.display = 'none';
    overlay.style.display = 'none';
    currentOpenCard = null;
  }

  function openCardInfo(card) {
    if (currentOpenCard) closeCardInfo();
    const cardName = card.getAttribute('data-name');
    if (cardName) {
      updateCardInfo(cardName);
      document.querySelector('.open-card').style.display = 'flex';
      document.querySelector('.overlay').style.display = 'flex';
      currentOpenCard = card;
    }
  }

  const searchInput = document.getElementById('searchInput');
  const searchIcon = document.getElementById('searchIcon');
  const cards = document.querySelectorAll('.card');
  let currentOpenCard = null;

  searchIcon.addEventListener('click', function() {
    const query = searchInput.value.trim();
    performSearch(query);
  });

  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      const query = searchInput.value.trim();
      performSearch(query);
    }
  });

  cards.forEach(card => {
    card.addEventListener('click', function(event) {
      event.stopPropagation();
      openCardInfo(card);
    });
  });

  const closeButtonDesktop = document.querySelector('.close-button-dekstope');
  const closeButtonMedia = document.querySelector('.close-button-media');
  const overlay = document.querySelector('.overlay');

  if (closeButtonDesktop) closeButtonDesktop.addEventListener('click', closeCardInfo);
  if (closeButtonMedia) closeButtonMedia.addEventListener('click', closeCardInfo);
  if (overlay) {
    overlay.addEventListener('click', function(event) {
      if (event.target === overlay) closeCardInfo();
    });
  }
});