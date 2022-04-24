
// DOM SELECTORS
let checkbox = document.getElementById("checkbox"); //for adding to the input an event listener
let headerText = document.querySelector(".header-text-container"); //for changing the color of all texts inside the header
let header = document.querySelector(".header"); //for changing the background image of the header, from day to night
let profileImage = document.querySelector(".profile-image"); //for changing the picture & border color of the profile img

// EVENT LISTENER FOR THE INPUT: To change the theme of the portfolio
checkbox.addEventListener("change", () => {
    
  header.classList.toggle("dayBackground");
  headerText.classList.toggle("darkText");
  profileImage.classList.toggle("profile-image-day");
});
