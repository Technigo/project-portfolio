const projectWrapper = document.getElementById("projectWrapper");

const PROJECT = [
  {
    img: "assets/weather-site.jpg",
    imgDescription: "Picture of Weather-site",
    title: "Weather site",
    projectSummary:
      "A weather site that fetch information from Open Weather API. It show current and 5-day forecast and you can search for desired city. This project was done in pairs, to learn about Gitub branches and merging. We had a specific design to follow. ",
    tech: ["HTML", "CSS3", "JAVASCRIPT"],
  },
  {
    img: "assets/guess-who.jpg",
    imgDescription: "Picture of Guess who game",
    title: "Guess who? game",
    projectSummary:
      "Create a game that have a secret person and make it sort out the correct characters based on different values. A lot of practice with filtering and functions in this project",
    tech: ["HTML", "CSS3", "JAVASCRIPT"],
  },
  {
    img: "assets/chatbot.jpg",
    imgDescription: "Picture of Dinner Guide chatbot",
    title: "Chatbot built in Javascript",
    projectSummary:
      "This chat bot is a conversation tool, were you can get suggestion for dinner recipes. For this project the starter code was provided. The challenge to make it work using Javascript, then adapting your own theme.",
    tech: ["HTML", "CSS3", "JAVASCRIPT"],
  },
];

PROJECT.forEach((project) => {
  projectWrapper.innerHTML += ` <div class="project-img">
<img
  src=${project.img}
  alt=${project.imgDescription}
/>
</div>
<div class="project-text">
<h3>${project.title}</h3>
<p class="project-description">
${project.projectSummary}
</p>
<ul>
<li>${project.tech[0]}</li>
<li>${project.tech[1]}</li>
<li>${project.tech[2]}</li>
</ul>
<div class="project-buttons">
            <a
              href="https://github.com/MalinSkill/project-chatbot"
              target="blank"
              class="view-code"
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="currentcolor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.6452 33.7684C18.6452 33.6363 18.5161 33.5042 18.3226 33.5042C18.129 33.5042 18 33.6363 18 33.7684C18 33.9006 18.129 34.0327 18.3226 33.9667C18.5161 33.9667 18.6452 33.9006 18.6452 33.7684ZM16.6452 33.4381C16.6452 33.5702 16.7742 33.7684 16.9677 33.7684C17.0968 33.8345 17.2903 33.7684 17.3548 33.6363C17.3548 33.5042 17.2903 33.372 17.0968 33.3059C16.9032 33.2399 16.7097 33.3059 16.6452 33.4381ZM19.5484 33.372C19.3548 33.372 19.2258 33.5042 19.2258 33.7024C19.2258 33.8345 19.4194 33.9006 19.6129 33.8345C19.8065 33.7684 19.9355 33.7024 19.871 33.5702C19.871 33.4381 19.6774 33.3059 19.5484 33.372ZM23.7419 8C14.8387 8 8 15.0037 8 24.1218C8 31.4559 12.4516 37.7328 18.9032 39.9793C19.7419 40.1115 20 39.5829 20 39.1864C20 38.7239 20 36.4774 20 35.0899C20 35.0899 15.4839 36.081 14.5161 33.1077C14.5161 33.1077 13.8065 31.1916 12.7742 30.7291C12.7742 30.7291 11.2903 29.6719 12.8387 29.6719C12.8387 29.6719 14.4516 29.8041 15.3548 31.3898C16.7742 33.9667 19.0968 33.2399 20.0645 32.7774C20.1935 31.7202 20.5806 30.9934 21.0968 30.5309C17.4839 30.1344 13.8065 29.6059 13.8065 23.2628C13.8065 21.4128 14.3226 20.5539 15.3548 19.3645C15.1613 18.902 14.6452 17.1841 15.5484 14.8716C16.8387 14.4751 20 16.6556 20 16.6556C21.2903 16.2591 22.6452 16.127 24 16.127C25.4194 16.127 26.7742 16.2591 28.0645 16.6556C28.0645 16.6556 31.1613 14.4091 32.5161 14.8716C33.4194 17.1841 32.8387 18.902 32.7097 19.3645C33.7419 20.5539 34.3871 21.4128 34.3871 23.2628C34.3871 29.6059 30.5806 30.1344 26.9677 30.5309C27.5484 31.0595 28.0645 32.0506 28.0645 33.6363C28.0645 35.8167 28 38.5918 28 39.1204C28 39.5829 28.3226 40.1115 29.1613 39.9132C35.6129 37.7328 40 31.4559 40 24.1218C40 15.0037 32.7097 8 23.7419 8ZM14.2581 30.7952C14.129 30.8612 14.1935 31.0595 14.2581 31.1916C14.3871 31.2577 14.5161 31.3237 14.6452 31.2577C14.7097 31.1916 14.7097 30.9934 14.5806 30.8612C14.4516 30.7952 14.3226 30.7291 14.2581 30.7952ZM13.5484 30.2666C13.4839 30.3987 13.5484 30.4648 13.6774 30.5309C13.8065 30.5969 13.9355 30.5969 14 30.4648C14 30.3987 13.9355 30.3327 13.8065 30.2666C13.6774 30.2005 13.6129 30.2005 13.5484 30.2666ZM15.6129 32.6452C15.5484 32.7113 15.5484 32.9095 15.7419 33.0416C15.871 33.1738 16.0645 33.2399 16.129 33.1077C16.1935 33.0416 16.1935 32.8434 16.0645 32.7113C15.9355 32.5791 15.7419 32.5131 15.6129 32.6452ZM14.9032 31.6541C14.7742 31.7202 14.7742 31.9184 14.9032 32.0506C15.0323 32.1827 15.1613 32.2488 15.2903 32.1827C15.3548 32.1166 15.3548 31.9184 15.2903 31.7863C15.1613 31.6541 15.0323 31.588 14.9032 31.6541Z"
                  fill="currentcolor"
                />
              </svg>
              View the code
            </a>
            <a
              href="https://dinner-guide.netlify.app"
              target="blank"
              class="live-demo"
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="currentcolor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.495 39.99C32.97 39.99 39.99 32.985 39.99 24.495C39.99 16.02 32.97 9 24.48 9C16.005 9 9 16.02 9 24.495C9 32.985 16.02 39.99 24.495 39.99ZM15.465 15.06C16.965 13.635 18.78 12.54 20.805 11.94C19.74 13.005 18.84 14.505 18.165 16.335C17.115 16.005 16.215 15.57 15.465 15.06ZM28.2001 11.955C30.21 12.555 32.025 13.635 33.51 15.06C32.775 15.585 31.8751 16.005 30.825 16.35C30.15 14.505 29.25 13.005 28.2001 11.955ZM25.545 12.435C26.79 13.035 27.93 14.655 28.74 16.86C27.75 17.04 26.685 17.145 25.545 17.19V12.435ZM20.25 16.86C21.075 14.655 22.2001 13.035 23.445 12.435V17.19C22.305 17.145 21.24 17.04 20.25 16.86ZM11.445 23.4451C11.655 20.895 12.615 18.54 14.085 16.605C15 17.28 16.185 17.865 17.565 18.3C17.175 19.86 16.92 21.5999 16.845 23.4451H11.445ZM32.145 23.4451C32.07 21.5999 31.815 19.86 31.425 18.3C32.805 17.865 33.99 17.295 34.89 16.605C36.375 18.54 37.335 20.895 37.545 23.4451H32.145ZM18.99 23.4451C19.065 21.81 19.29 20.25 19.635 18.84C20.835 19.08 22.1099 19.23 23.445 19.29V23.4451H18.99ZM25.545 23.4451V19.29C26.88 19.23 28.155 19.08 29.355 18.84C29.7 20.25 29.925 21.81 30 23.4451H25.545ZM11.445 25.545H16.845C16.92 27.42 17.175 29.175 17.565 30.75C16.2 31.185 15.03 31.755 14.13 32.43C12.63 30.4799 11.655 28.11 11.445 25.545ZM18.99 25.545H23.445V29.775C22.125 29.835 20.835 29.985 19.65 30.21C19.29 28.785 19.05 27.195 18.99 25.545ZM25.545 29.775V25.545H30C29.94 27.195 29.7 28.785 29.34 30.21C28.155 29.985 26.88 29.835 25.545 29.775ZM31.425 30.75C31.83 29.175 32.07 27.42 32.145 25.545H37.545C37.335 28.11 36.3601 30.4799 34.86 32.43C33.9601 31.755 32.79 31.185 31.425 30.75ZM25.545 31.875C26.6699 31.9199 27.735 32.025 28.71 32.205C27.9 34.365 26.775 35.97 25.545 36.555V31.875ZM20.28 32.205C21.255 32.025 22.32 31.9199 23.445 31.875V36.555C22.215 35.97 21.09 34.365 20.28 32.205ZM15.51 33.975C16.245 33.465 17.145 33.0451 18.18 32.715C18.855 34.515 19.74 35.985 20.775 37.035C18.795 36.435 16.995 35.3701 15.51 33.975ZM30.81 32.715C31.845 33.0451 32.745 33.465 33.4801 33.975C31.995 35.3701 30.1949 36.435 28.215 37.035C29.25 35.985 30.135 34.515 30.81 32.715Z"
                  fill="currentcolor"
                />
              </svg>
              Live demo
            </a>
          </div>
        </div>
      </div>`;
});
