// animations.js – scroll‑triggered fade‑in for sections
// Works with the .fade-in-section and .visible classes defined in css/animations.css

// IntersectionObserver options – trigger when 10% of the element is visible
const observerOptions = {
  root: null, // viewport
  rootMargin: "0px",
  threshold: 0.1,
};

// Callback for observer entries
const onIntersection = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
};

// Create observer instance
const observer = new IntersectionObserver(onIntersection, observerOptions);

// Apply to all sections (or any element you want to animate)
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  sections.forEach(section => {
    section.classList.add("fade-in-section");
    observer.observe(section);
  });
});
