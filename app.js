
document.addEventListener('DOMContentLoaded', function() {
  // Hamburger menu toggle for mobile nav
  const hamburger = document.querySelector('.hamburger');
  const navList = document.getElementById('nav-list');
  if (hamburger && navList) {
    hamburger.addEventListener('click', function() {
      const isOpen = navList.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
      hamburger.classList.toggle('open', isOpen);
      hamburger.innerHTML = isOpen ? '&times;' : '&#9776;';
      // Prevent scrolling when menu is open
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }
}); 
