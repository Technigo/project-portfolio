// DOM SELECTOR
// let btn = document.getElementById("btn-background");

// let header = document.querySelector(".header");
 //for changing the background image of the header and adding a bottom border
let headerText = document.querySelector(".header-text-container"); //for changing the color of all text inside the header
let profileImage = document.querySelector(".profile-image"); //for changing the border color of the profile img
let headingOne = document.getElementById("big-heading"); //for adding text shadow to the heading one text



let checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
    document.header.classList.toggle('dark')
});



// function changeMode() {
//     //change the theme of the portfolio
//     document.body.classList.toggle('dark')
// }



//Event listener
// btn.addEventListener("click", changeMode);

//Function
// function changeMode(event) {
//   event.preventDefault();

//   header.style.backgroundImage = "url('images/switzerland-mountains-daytime.webp')";
//   header.style.borderBottom = "1px solid #00004d";
//   headerText.style.color = "#00004d";
//   profileImage.style.borderColor = "#00004d";
//   profileImage.style.backgroundImage = "url('images/profile-picture-2.jpg')";
//   headingOne.style.textShadow = "2px 2px #fff";
//   btn.textContent = "dark mode";
// }



// btn.onclick = show;  
// function show() {
// // this.classList.toggle('another');
// }