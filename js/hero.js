// hero.js – Canvas de partículas sobre o hero

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animFrame;

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    buildParticles();
  };

  const buildParticles = () => {
    const count = Math.floor((canvas.width * canvas.height) / 16000);
    particles = Array.from({ length: Math.min(count, 90) }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.8 + 0.4,
      alpha: Math.random() * 0.5 + 0.1,
    }));
  };

  const drawLine = (a, b, dist, maxDist) => {
    const alpha = (1 - dist / maxDist) * 0.15;
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.strokeStyle = `rgba(0, 229, 255, ${alpha})`;
    ctx.lineWidth = 0.5;
    ctx.stroke();
  };

  const tick = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const maxDist = 140;

    particles.forEach((p, i) => {
      // Move
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 229, 255, ${p.alpha})`;
      ctx.fill();

      // Connect nearby
      for (let j = i + 1; j < particles.length; j++) {
        const b = particles[j];
        const dx = p.x - b.x;
        const dy = p.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) drawLine(p, b, dist, maxDist);
      }
    });

    animFrame = requestAnimationFrame(tick);
  };

  window.addEventListener('resize', resize, { passive: true });
  resize();
  tick();
});
