document.addEventListener("DOMContentLoaded", () => {
  // Fade in and scale up the hero section
  const heroSection = document.querySelector(".transition-hero");
  heroSection.style.opacity = "1";
  heroSection.style.transform = "scale(1)";

  // Fade in the navigation bar
  const navbar = document.querySelector(".transition-navbar");
  navbar.style.opacity = "1";

  // Fade in and scale up the features section
  const featuresSection = document.querySelector(".transition-features");
  featuresSection.style.opacity = "1";
  featuresSection.style.transform = "scale(1)";
});
