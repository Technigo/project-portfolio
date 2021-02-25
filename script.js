// DOM SElECTORS
const sideNav = document.getElementById("sidenav");

// FUNCTION DECLARATIONS

// Hamburger

const hamburgerToggle = (hamburgerIcon) => {
    hamburgerIcon.classList.toggle("fa-times");
    if (sideNav.style.display === "none") {
        sideNav.style.display = "block";
    } else {
        sideNav.style.display = "none";
    }
}

// EVENT LISTENERS

