

// SPIBODY DIGITALZ HUB
// Mobile menu + scroll reveal animations

// Premium Loader
const loader = document.getElementById("loader");

window.addEventListener("load", () => {
  setTimeout(() => {
    if (loader) {
      loader.classList.add("hide");
    }
  }, 1600);
});
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const revealElements = document.querySelectorAll(".reveal");

// Mobile menu
if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

// Reveal animation
function revealOnScroll() {
  const triggerPoint = window.innerHeight * 0.85;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < triggerPoint) {
      element.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);