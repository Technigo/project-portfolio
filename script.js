const thoughtHeader = document.querySelector('.thoughts-header');

console.log(window.innerWidth);

if (window.innerWidth < 1000) {
  thoughtHeader.innerHTML = 'MY THOUGHTS';
}
