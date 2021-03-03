const mobileMenu = document.getElementById("mobile-menu");
const popUpMenu = document.getElementById("pop-up-menu");
const closePopUp = document.getElementById("close-pop-up");

const openpopUpList = () => {
    popUpMenu.classList.add("pop-up-menu-on")
    mobileMenu.classList.add("mobile-menu-off")
}

const closepopUpList = () => {
    popUpMenu.classList.remove("pop-up-menu-on")
    mobileMenu.classList.remove("mobile-menu-off")
}

mobileMenu.addEventListener('click', openpopUpList);
closePopUp.addEventListener('click', closepopUpList);