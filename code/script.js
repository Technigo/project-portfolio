const techSection = document.getElementById ('tech-section')
const featuredProjects = document.getElementById('featured-projects')
const myWords = document.getElementById('my-words')
const skillsSection = document.getElementById('skills')
const footer = document.getElementById('footer')

const scrollTechSection = () => {
    techSection.scrollIntoView();
}

const scrollFeaturedProjects = () => {
    featuredProjects.scrollIntoView();
}

const scrollMyWords = () => {
    myWords.scrollIntoView();
}

const scrollSkillsSection = () => {
    skillsSection.scrollIntoView();
}

const scrollFooter = () => {
    footer.scrollIntoView();
}

const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

addEventListener("load", () => { 
    window.scrollTo(0, 0);
});

