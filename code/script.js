let bodyColor = document.body
let headerImg = document.querySelector('header')
let footerColor = document.querySelector('footer')
let titleColor  = document.getElementById('headertext')
let gitIcon = document.getElementById('git-icon')
let LinkedInIcon = document.getElementById('linkedin-icon')
let StackOverflowIcon = document.getElementById('stack-icon')





function changeColors() { 
    bodyColor.classList.toggle('color-toggle')
    headerImg.classList.toggle('header-toggle')
    footerColor.classList.toggle('footer-toggle')
    titleColor.classList.toggle('title-toggle')
    gitIcon.classList.toggle('icon-toggle')
    LinkedInIcon.classList.toggle('icon-toggle')
    StackOverflowIcon.classList.toggle('icon-toggle')
};
 

 

 