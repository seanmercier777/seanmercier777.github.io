// scripts.js
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  const burger = toggle.querySelector('.burger');
  const modeToggle = document.querySelector('.mode-toggle');
  const modeIcon = modeToggle.querySelector('.mode-icon');
  const scrollBtn = document.querySelector('.scroll-to-top');

  // Nav toggle animation
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    toggle.classList.toggle('open');
  });

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href'))
              .scrollIntoView({ behavior: 'smooth' });
      if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.classList.remove('open');
      }
    });
  });

  // Light/Dark mode toggle
  function setMode(dark) {
    document.body.classList.toggle('dark-mode', dark);
    modeIcon.textContent = dark ? '☀️' : '🌙';
    localStorage.setItem('darkMode', dark ? '1' : '0');
  }
  modeToggle.addEventListener('click', () => {
    setMode(!document.body.classList.contains('dark-mode'));
  });
  // On load, set mode from localStorage
  setMode(localStorage.getItem('darkMode') === '1');

  // Scroll to top button
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add('show');
    } else {
      scrollBtn.classList.remove('show');
    }
  });
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Section reveal on scroll
  const reveals = document.querySelectorAll('.section, .project, .job');
  function revealOnScroll() {
    const trigger = window.innerHeight * 0.92;
    reveals.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < trigger) {
        el.classList.add('visible');
      } else {
        el.classList.remove('visible');
      }
    });
  }
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});
