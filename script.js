const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.onclick = () => mobileMenu.classList.add('active');
closeMenu.onclick = () => mobileMenu.classList.remove('active');