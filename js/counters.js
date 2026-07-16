// counters.js – animação de contadores quando entram na viewport
// Cada elemento com a classe .counter deve ter atributo data-target com o valor final.

document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');
  if (!counters.length) return;

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.6,
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target')) || 0;
        const duration = 2000; // ms
        const start = performance.now();
        const startVal = 0;
        const step = (timestamp) => {
          const progress = Math.min((timestamp - start) / duration, 1);
          const current = Math.floor(startVal + progress * (target - startVal));
          el.textContent = current.toLocaleString();
          if (progress < 1) {
            requestAnimationFrame(step);
          }
        };
        requestAnimationFrame(step);
        obs.unobserve(el);
      }
    });
  }, options);

  counters.forEach(counter => observer.observe(counter));
});
