// DOM SElECTORS
const sideNav = document.getElementById("sidenav");
const textWrapper = document.querySelector('.typewriter');

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

// Text animations



textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
.add({
    targets: '.typewriter .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
}).add({
    targets: '.typewriter',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
});

anime.timeline({loop: true})
  .add({
    targets: '.name',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.name',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

// EVENT LISTENERS


// INVOKES
