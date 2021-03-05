// Import data scripts
import { getProjects } from "./data/projects.js";
import { getBlogs } from "./data/blogs.js";
import { getSkills } from "./data/skills.js";

// DOM SELECTORS
const elFeaturedProjects = document.getElementById("featuredProjectsList");
const elOtherProjects = document.getElementById("otherProjectsList");
const elFeaturedBlogs = document.getElementById("featuredBlogsList");
const elOtherBlogs = document.getElementById("otherBlogsList");
const elSkillsList = document.getElementById("skillsList");

const drawFeaturedProjects = () => {
  const featuredProjects = getProjects().filter((project) => project.featured);
  let html = "";
  featuredProjects.forEach((project, i) => {
    html += `
        <li class="card" aria-labelledby="project${i}">
            <div class="card__title--featured">
              <picture>
                <source srcset="./assets/projects/project-${project.image.src}.webp" type="image/webp" />
                <source srcset="./assets/projects/project-${project.image.src}.jpg" type="image/jpg" />
                <img src="./assets/projects/project-${project.image.src}.jpg" alt="${project.image.alt}" />
              </picture>
                <h2 class="featured">
                    <a href="${project.link}" target="_blank" id="project${i}">${project.title}</a>
                </h2>
            </div>
            <p class="primary primary--bold">${project.titleDescription}</p>
            <p>${project.projectDescription}</p>
            <ul class="card__pills" aria-label="list of languages used in the project">
    `;
    project.languages.forEach((language) => {
      html += `        
            <li class="card__pills--item">${language}</li>
        `;
    });
    html += `</ul></li>`;
  });
  elFeaturedProjects.innerHTML = html;
};

const drawFeaturedBlogs = () => {
  const featuredBlogs = getBlogs().filter((blog) => blog.featured);
  let html = "";
  featuredBlogs.forEach((blog, i) => {
    html += `
        <li class="card" aria-labelledby="blog${i}">
            <div class="card__title--featured">
                <img src="./assets/blog-templ.svg" alt="" />
            </div>
            <p class="primary">${blog.date}</p>
            <h2 class="blog-title blog-title--featured">
            <a href="${blog.link}" target="_blank" id="blog${i}">${blog.title}</a>
            </h2>
            <p>${blog.description}<span class="primary"> >></span></p>
        </li>
    `;
  });
  elFeaturedBlogs.innerHTML = html;
};

const drawOtherBlogs = () => {
  const otherBlogs = getBlogs().filter((blog) => !blog.featured);
  let html = "";
  otherBlogs.forEach((blog, i) => {
    html += `
        <li class="card" aria-labelledby="blog${i}">
            <div class="card__text-inline card__text-inline--blog">
                <p class="primary">${blog.date}</p>
                <h2 class="blog-title">
                <a href="${blog.link}" target="_blank" id="blog${i}">${blog.title}</a>
                </h2>
                <span class="primary primary--bold"> >></span>
            </div>
        </li>
    `;
  });
  elOtherBlogs.innerHTML = html;
};

const drawOtherProjects = () => {
  const otherProjects = getProjects().filter((project) => !project.featured);
  let html = "";
  otherProjects.forEach((project, i) => {
    html += `
        <li class="card" aria-labelledby="project${i}">
            <div class="card__text-inline">
                <h2>
                <a href="${project.link}" target="_blank" id="project${i}" class="primary">${project.title}</a>
                </h2>
                <p>
                ${project.projectDescription}
                <span class="primary primary--bold"> >></span>
                </p>
            </div>
            <ul class="card__pills" aria-label="list of languages used in the project">
    `;
    project.languages.forEach((language) => {
      html += `        
            <li class="card__pills--item">${language}</li>
        `;
    });
    html += `</ul></li>`;
  });
  elOtherProjects.innerHTML = html;
};

const drawSkills = () => {
  const skills = getSkills();
  let html = "";
  skills.forEach((skillCategory, i) => {
    html += `
    <ul class="skills__category" aria-labelledby="category${i}">
        <h2 class="primary" id="category${i}">${skillCategory.category}</h2>`;
    skillCategory.skills.forEach((skill) => {
      html += `<li>${skill}</li>`;
    });
    html += `</ul>`;
  });
  elSkillsList.innerHTML = html;
};

// RUN FUNCTIONS
drawFeaturedProjects();
drawFeaturedBlogs();
drawOtherProjects();
drawOtherBlogs();
drawSkills();
