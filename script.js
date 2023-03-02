const headerImage = document.getElementById("header-image");

const today = new Date();
//console.log(today);
const month = today.getMonth();
//console.log(month);

const imageToShow = () => {
  if (month === 12 || month === 1){
    headerImage.innerHTML = `
    <img src="./assets/decjan.jpg" alt="frost leaves on the ground" class="header-img"/>`
  } else if (month === 2 || month === 3){
    headerImage.innerHTML = `<img src="./assets/febmar.jpg" alt="a small purple crocus flower sprouting through dead leaf" class="header-img"/>`
  } else if (month === 4 || month === 5){
    headerImage.innerHTML = `<img src="./assets/aprmay.jpg" alt="single purple allium" class="header-img"/>`
  } else if (month === 6 || month === 7){
    headerImage.innerHTML = `<img src="./assets/junjul.jpg" alt="a group of yellow and orange sneezeweed flowers with a small bee" class="header-img"/>`
  } else if (month === 8){
    headerImage.innerHTML = `<img src="./assets/aug.jpg" alt="orange and pink zinnias" class="header-img"/>`
  } else if (month === 9){
    headerImage.innerHTML = `<img src="./assets/sept.jpg" alt="yellow brown and green leaves in a puddle" class="header-img"/>`
  } else if (month === 10 || month === 11){
    headerImage.innerHTML = `<img src="./assets/octnov.jpg" alt="orange grey and green pumpkins and gourds" class="header-img"/>`
  }
}

imageToShow()