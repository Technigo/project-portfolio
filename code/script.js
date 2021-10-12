const themeToggle = document.getElementById("theme-toggle");
const containerWithDots = document.getElementById("dots");

themeToggle.onchange = () => {
  document.body.classList.toggle("another-color-theme");
  containerWithDots.classList.toggle("glowing-shadow");
};
