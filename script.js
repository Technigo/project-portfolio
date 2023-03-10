// Changing Header Image by Month

const headerImage = document.getElementById("header-image");

const today = new Date();
//console.log(today);
// const month = 1;
const month = today.getMonth();
//console.log(month);

const imageToShow = () => {
  if (month === 12 || month === 1){
    headerImage.innerHTML = `<img src="./assets/decjan.jpg" alt="frost leaves on the ground" class ="header-image"/>`
  } else if (month === 2 || month === 3){
    headerImage.innerHTML = `<img src="./assets/febmar.jpg" alt="a small purple crocus flower sprouting through dead leaf"  class ="header-image"/>`
  } else if (month === 4 || month === 5){
    headerImage.innerHTML = `<img src="./assets/aprmay.jpg" alt="single purple allium" class ="header-image"/>`
  } else if (month === 6 || month === 7){
    headerImage.innerHTML = `<img src="./assets/junjul.jpg" alt="a group of yellow and orange sneezeweed flowers with a small bee" class ="header-image"/>`
  } else if (month === 8){
    headerImage.innerHTML = `<img src="./assets/aug.jpg" alt="orange and pink zinnias" class ="header-image"/>`
  } else if (month === 9){
    headerImage.innerHTML = `<img src="./assets/sept.jpg" alt="yellow brown and green leaves in a puddle" class ="header-image"/>`
  } else if (month === 10 || month === 11){
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