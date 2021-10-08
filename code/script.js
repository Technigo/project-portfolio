const tagContainer = document.getElementsByClassName('filled-title')

function changeTagColor() {
    if(tagContainer.value === 'For more' )
    tagContainer.style.color = "red";
}