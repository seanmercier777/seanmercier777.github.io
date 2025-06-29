// scripts.js
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href'))
              .scrollIntoView({ behavior: 'smooth' });
      if (nav.classList.contains('open')) nav.classList.remove('open');
    });
  });
});
