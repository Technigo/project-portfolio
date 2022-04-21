
// DOM SELECTOR

let btn = document.getElementById('btn-background');
// let header = document.getElementById("myHeader");
let header = document.querySelector('.header');
let headerText = document.querySelector('.header-text-container'); //for changing the color of all text inside the header
let profileImage = document.querySelector('.profile-image'); //for changing the border color of the profile img
let profileSection = document.getElementById('profile-section')// for changin the profile section color
let headingOne= document.getElementById('big-heading')//for adding text shadow to the heading one



//Event listeners

btn.addEventListener('click', () => {
    header.style.backgroundImage = "url('images/switzerland-mountains-daytime.webp')";
    headerText.style.color = " #00004d";
    profileImage.style.borderColor = "#00004d";
    profileSection.style.background = "#D6E5FA";
    headingOne.style.textShadow = "2px 2px #fff"

});
//CHANGE FOOTER COLOR AS WELL