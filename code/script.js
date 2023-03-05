const linkedInIcon1 = document.getElementById("linked-in-icon-header");
const linkedInIcon2 = document.getElementById("linked-in-icon-footer");
const gitHubIcon1 = document.getElementById("github-icon-header");
const gitHubIcon2 = document.getElementById("github-icon-footer");


//Eventlisteners
linkedInIcon1.addEventListener("click", () => {
    document.location.href = "https://www.linkedin.com/in/josefin-robertsson-912394248/"
    event.preventDefault();
});
linkedInIcon2.addEventListener("click", () => {
    document.location.href = "https://www.linkedin.com/in/josefin-robertsson-912394248/"
    event.preventDefault();
});

gitHubIcon1.addEventListener("click", () => {
    document.location.href = "https://github.com/JosefinRobertsson"
    event.preventDefault();
});
gitHubIcon2.addEventListener("click", () => {
    document.location.href = "https://github.com/JosefinRobertsson"
    event.preventDefault();
});