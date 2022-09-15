const linksBottom = document.getElementById('links-bottom')

linksBottom.addEventListener('click', () => {
    window.scrollTo(0, document.body.scrollHeight);
    linksBottom = '';
})