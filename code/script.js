const themeToggle = document.getElementById("theme-toggle");

themeToggle.onchange = () => {
  document.body.classList.toggle("another-color-theme");
};
