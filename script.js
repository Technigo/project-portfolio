// Changing Header Image by Month

const headerImage = document.getElementById("header-image");

const today = new Date();
//console.log(today);
// const month = 1;
const month = today.getMonth();
// console.log(month);

const imageToShow = () => {
  if (month === 11 || month === 0){
    headerImage.innerHTML = `<img src="./assets/decjan.jpg" alt="frost leaves on the ground" class ="header-image"/>`
  } else if (month === 1 || month === 2){
    headerImage.innerHTML = `<img src="./assets/febmar.jpg" alt="a small purple crocus flower sprouting through dead leaf"  class ="header-image"/>`
  } else if (month === 3 || month === 4){
    headerImage.innerHTML = `<img src="./assets/aprmay.jpg" alt="single purple allium" class ="header-image"/>`
  } else if (month === 5 || month === 6){
    headerImage.innerHTML = `<img src="./assets/junjul.jpg" alt="a group of yellow and orange sneezeweed flowers with a small bee" class ="header-image"/>`
  } else if (month === 7){
    headerImage.innerHTML = `<img src="./assets/aug.jpg" alt="orange and pink zinnias" class ="header-image"/>`
  } else if (month === 8){
    headerImage.innerHTML = `<img src="./assets/sept.jpg" alt="yellow brown and green leaves in a puddle" class ="header-image"/>`
  } else if (month === 9 || month === 10){
    headerImage.innerHTML = `<img src="./assets/octnov.jpg" alt="orange grey and green pumpkins and gourds" class ="header-image"/>`
  }
}

imageToShow()

// Scroll Up Button

const upButton = document.getElementById("upButton");

window.onscroll = () => {scrollFunction()};

const scrollFunction = () => {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    upButton.style.display = "block";
  } else {
    upButton.style.display = "none"
  }
}

const scrollUp = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop =0
}

upButton.addEventListener('click', scrollUp)