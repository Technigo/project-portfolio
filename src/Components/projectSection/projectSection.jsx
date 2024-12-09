// src/components/projectSection/projectSection.jsx

import './projectSection.css';


const projects = [
    {
        title: 'News site',
        description: (
            <>
                <p>This project was completed during the second week of the bootcamp, showcasing the skills and concepts learned in a short amount of time. The project consists of two pages, each with a unique design and functionality.</p>

                <ul>
                    <li><strong>Page 1:</strong> The first page features a clean and user-friendly layout, providing an intuitive introduction to the project’s content.</li>
                    <li><strong>Page 2:</strong> The second page presents a distinct design, offering a fresh user experience while maintaining the overall theme of the project. This page includes a <a href="https://www.slowlifesweden.com/" target="_blank" rel="noopener noreferrer">link to an external URL</a>, giving users access to more detailed content or resources.</li>
                </ul>

                <p>Both pages are accessible via a link, demonstrating the ability to create seamless navigation and diverse page layouts.</p>
            </>
        ),
        imageUrl: 'https://github.com/Maryyy-ux/technigo-project-news-site/blob/main/News.png?raw=true',
        githubUrl: 'https://github.com/Maryyy-ux/technigo-project-news-site.git',
        liveUrl: 'https://polite-profiterole-d4fb7a.netlify.app/'
    },
    {
        title: 'Movies Site',
        description: 'Completed during the 14th week, this project uses React and React Router to create a multi-page app. The TMDB API is integrated to organize movies by "Popular" and "Now Playing," updating dynamically with user interactions and ratings.',
        imageUrl: 'https://github.com/Maryyy-ux/Maryyy_ux_project-movies-vite/blob/main/Movies.png?raw=true',
        githubUrl: 'https://github.com/Maryyy-ux/Maryyy_ux_project-movies-vite.git',
        liveUrl: 'https://maryyy-ux-project-movies.netlify.app/'
    },
    {
        title: 'Books Site',
        description: 'Completed in week 6, this project introduced arrays, loops, and objects in JavaScript. A tribute to my sister, a new writer, featuring some of her favorite books. The final space is dedicated to showcasing the first of many books she will write.',
        imageUrl: 'https://github.com/Maryyy-ux/project-library/blob/main/Project%20library.png?raw=true',
        githubUrl: 'https://github.com/Maryyy-ux/project-library.git',
        liveUrl: 'https://cozy-croquembouche-12e08c.netlify.app/',
    },
    {
        title: 'Chatbot',
        description: 'This project was completed during the 5th week of the bootcamp, where we focused on learning how to manipulate the DOM, and how to use functions and scope in JavaScript. I also designed the layout to improve the pages visibility and make it more user-friendly. By incorporating these key concepts, I was able to enhance the overall user experience, making the site not only functional but also intuitive and easy to navigate.',
        imageUrl: 'https://github.com/Maryyy-ux/project-chatbot/blob/main/Chatbot.png?raw=true',
        githubUrl: 'https://github.com/Maryyy-ux/project-chatbot.git',
        liveUrl: 'https://chimerical-druid-c30ab4.netlify.app/'
    },
    {
        title: 'Accesibility',
        description: 'In week 8, we focused on accessibility in web design. This project features two pages that adhere to the WCAG guidelines, ensuring that content is accessible to all users. We applied the POUR test (Perceivable, Operable, Understandable, and Robust) to make the site as inclusive as possible. The pages are designed with inclusivity in mind, offering a free downloadable NVDA screen reader for users who need it. Additionally, I implemented a high-contrast toggle button, allowing users with visual impairments to easily navigate and enjoy the site. For me, the main goal of this project was to create a diverse and inclusive experience, where accessibility is a central theme.',
        imageUrl: 'https://github.com/Maryyy-ux/Maryyy-ux-Accesibility-project/blob/main/Accesibility.png?raw=true',
        githubUrl: 'https://github.com/Maryyy-ux/Maryyy-ux-Accesibility-project.git',
        liveUrl: 'https://scintillating-praline-7b5d1a.netlify.app/'
    },
    {
        title: 'Music releases',
        description: 'Week 9 was a major milestone! The goal was to get hands-on experience with Node.js, JSX, and dive into React, particularly focusing on components and props. Despite the breadth of the concepts learned, the final project is particularly exciting from a user experience perspective: a Spotify Mockup! This project helped me understand how to structure apps with React, as well as how to handle dynamic data and enhance user interaction. The mockup mimics the look and feel of Spotify, offering a practical challenge in UX/UI design while reinforcing my React skills.',
        imageUrl: 'https://github.com/Maryyy-ux/project-music-releases-vite/blob/main/Music.png?raw=true',
        githubUrl: 'https://github.com/Maryyy-ux/project-music-releases-vite.git',
        liveUrl: 'https://cute-profiterole-7ddc46.netlify.app'
    },
    {
        title: 'World weather App',
        description: 'Week 7 was a challenge, but I successfully created a worldwide weather app! This project involved working with APIs, fetch, and promises to retrieve real-time weather data. Users can check the weather forecast for the next 5 days, with the design and icons dynamically changing based on the weather conditions of the selected city. It was an awesome experience, and I am proud of how the app came together!.',
        imageUrl: 'https://github.com/Maryyy-ux/project-weather-app/blob/master/WorldWeatherApp.png?raw=true',
        githubUrl: 'https://github.com/Maryyy-ux/project-weather-app.git',
        liveUrl: 'https://cute-selkie-735cdb.netlify.app'
    },
    {
        title: 'Survey_Harry Potters Quiz',
        description: 'In Week 10, we delved into React States and Controlled Forms. Despite the complexity of the topic, I was able to apply these concepts excellently in this dynamic Harry Potter quiz! It is a fun, interactive experience for fans of the wizarding world!.',
        imageUrl: 'https://github.com/Maryyy-ux/project-survey-vite/blob/main/HarryPottersQuiz.png?raw=true',
        githubUrl: 'https://github.com/Maryyy-ux/project-survey-vite.git',
        liveUrl: 'https://iridescent-paprenjak-8c0d40.netlify.app'
    },
    {
        title: 'Handoff_Thorondors Kennel',
        description: 'Week 13 was both the most emotional and the most challenging project. Following the design of a talented UX/UI design course mate, we dove deep into using Figma as a design tool. The design is as spectacular as it sounds! Created specifically for mobile devices, the goal was to make it applicable in the real world, thanks to the trust of the company that made it possible. Working in branches, despite being in different countries than my project teammates, was the goal to achieve... and we did it!.',
        imageUrl: 'https://github.com/Maryyy-ux/project-design-handoff-vite/blob/main/ThorondorsKennel.png?raw=true',
        githubUrl: 'https://github.com/Maryyy-ux/project-design-handoff-vite.git',
        liveUrl: 'https://thorondors-kennel.netlify.app/'
    },
];

// Agregar más proyectos si es necesario

function ProjectSection() {
    return (
        <section className="project-section">
            <h2>Featured Projects</h2>
            <div className="project-grid">
                {projects.map((project, index) => (
                    <div className="project-row" key={index}>
                        <div className="project-image">
                            <img src={project.imageUrl} alt={`Imagen de ${project.title}`} />
                        </div>
                        <div className="project-info">
                            {/* Cuatro botones encima del título */}
                            <div className="top-buttons">
                                <button className="top-btn">HTML5</button>
                                <button className="top-btn">CSS</button>
                                <button className="top-btn">React</button>
                                <button className="top-btn">JavaScript</button>
                            </div>

                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="button-container">
                                <a href={project.githubUrl} className="project-btn">View Code</a>
                                <a href={project.liveUrl} className="project-btn">Live Demo</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProjectSection;