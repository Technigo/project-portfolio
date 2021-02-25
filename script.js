// DOM SElECTORS
const sideNav = document.getElementById("sidenav");

// FUNCTION DECLARATIONS

// Hamburger

const hamburgerToggle = (hamburgerIcon) => {
    hamburgerIcon.classList.toggle("fa-times");
    if (hamburgerIcon === "fa-bars") {
        sideNav.style.display = "none";
    } else {
        sideNav.style.display = "block";
    }
}

// EVENT LISTENERS

