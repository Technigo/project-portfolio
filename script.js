var toggle = document.querySelector('#toggle')
var menu = document.querySelector('#menu')

toggle.addEventListener('click', function(){
  if (menu.classList.contains('is-active')) {
    menu.classList.remove('is-active')
  } else {
    menu.classList.add('is-active')
  }
})