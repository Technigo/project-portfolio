let bodyColor = document.body
let headerImg = document.querySelector('header')
let footerColor = document.querySelector('footer')
let titleColor  = document.getElementById('headertext')



function changeColors() { 
    bodyColor.classList.toggle('color-toggle')
    headerImg.classList.toggle('header-toggle')
    footerColor.classList.toggle('footer-toggle')
    titleColor.classList.toggle('title-toggle')
};
 

 

 