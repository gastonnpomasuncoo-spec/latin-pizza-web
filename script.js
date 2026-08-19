document.addEventListener('DOMContentLoaded', () => {
  // Navegación con efecto al scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(0, 0, 0, 0.95)';
      navbar.style.padding = '10px 0';
    } else {
      navbar.style.background = 'rgba(0, 0, 0, 0.8)';
      navbar.style.padding = '15px 0';
    }
  });

  // Intersection Observer para las animaciones fluidas (Fade-up)
  const animatedElements = document.querySelectorAll('[data-animate]');
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Anima solo la primera vez
      }
    });
  }, observerOptions);

  animatedElements.forEach(element => {
    scrollObserver.observe(element);
  });
});