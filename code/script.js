// Scroll button:
let scrollbutton = document.getElementById("scrollBtn");

// When the user scrolls down 60px from the top of the document, show the button
window.onscroll = () => {scrollFunction()};

const scrollFunction = () => {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    scrollbutton.style.display = "block";
  } else {
    scrollbutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
const topFunction = () => {
  document.body.scrollTop = 40; // For Safari
  document.documentElement.scrollTop = 40; // For Chrome, Firefox, IE and Opera
}
