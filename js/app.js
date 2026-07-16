// app.js – Inicialização geral

document.addEventListener('DOMContentLoaded', () => {
  // Navbar: adiciona classe "scrolled" ao rolar
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const onScroll = () => {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
});
