document.addEventListener('DOMContentLoaded', function() {

  function toggleMenu() {
    var navbar = document.getElementById('navbar');
    var overlay = document.getElementById('overlay');
    navbar.classList.toggle('active');
    overlay.classList.toggle('active');
  }

  function closeMenuOnOverlayClick() {
    var navbar = document.getElementById('navbar');
    var overlay = document.getElementById('overlay');
    navbar.classList.remove('active');
    overlay.classList.remove('active');
  }

 
  function closeMenuOnLinkClick() {
    var navbar = document.getElementById('navbar');
    var overlay = document.getElementById('overlay');
    navbar.classList.remove('active');
    overlay.classList.remove('active');
  }


  function handleScroll() {
    var header = document.getElementById('header');
    var scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }


  document.getElementById('menu-toggle').addEventListener('click', toggleMenu);
  document.getElementById('overlay').addEventListener('click', closeMenuOnOverlayClick);
  document.querySelectorAll('nav ul li a').forEach(function(link) {
    link.addEventListener('click', closeMenuOnLinkClick);
  });
  window.addEventListener('scroll', handleScroll);
});