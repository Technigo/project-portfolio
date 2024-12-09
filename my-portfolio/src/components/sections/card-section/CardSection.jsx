/* eslint-disable react/prop-types */

/* ========== CARD SECTION ========== */

/* This component contains cards displayed under Featured Projects and My Journey. The cards contain heading, image, body-text, and button/-s. 

ProjectCard uses data from projects.json.
ArticleCard uses hardcoded article data within CardSection.jsx.

The buttons are imported from the component Button. 
*/

import "./CardSection.css";
import { H3, Body } from "../../ui/typography/Typography";
import projectsData from "../../../projects.json"; // Import project data from JSON file
import Button from "../../ui/buttons/Button";

export const CardSection = ({ category }) => {
  // Define title and data based on the category
  const title = category === "project-card" ? "Featured Projects" : "My Journey";
  
  // Load data from JSON for projects or use hardcoded data for articles
  const cardsData = category === "project-card" ? projectsData.projects : [
    {
      title: "Being Scared: I Love Code",
      date: "July 28th",
      content: "Writing code is less about 'just working'. Instead, it's much more about creativity.",
      image: "https://via.placeholder.com/300"
    },
    {
      title: "My First Code Review",
      date: "July 31st",
      content: "It's similar to creative writing in that the author architecting a story must use an assortment of tools.",
      image: "https://via.placeholder.com/300"
    },
    {
      title: "JavaScript 101",
      date: "August 3rd",
      content: "A way to satisfy a particular objective through an assortment of tools and components.",
      image: "https://via.placeholder.com/300"
    },
    {
      title: "Being Scared: I Love Code",
      date: "July 28th",
      content: "Writing code is less about 'just working'. Instead, it's much more about creativity.",
      image: "https://via.placeholder.com/300"
    },
  ];

  return (
    <div className="card-section">
      <h2>{title}</h2>
      <div className="cards-container">
        {cardsData.map((card, index) =>
          category === "project-card" ? (
            <ProjectCard
              key={index}
              name={card.name}
              content={card.content}
              image={card.image}
              netlifyLink={card.netlify}
              githubLink={card.github}
            />
          ) : (
            <ArticleCard
              key={index}
              title={card.title}
              date={card.date}
              content={card.content}
              image={card.image}
            />
          )
        )}
      </div>
    </div>
  );
};

const ProjectCard = ({ name, content, image, netlifyLink, githubLink }) => (
  <div className="project-card">
    <div
      className="project-image"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(253, 111, 0, 0.30), rgba(253, 111, 0, 0.30)), url(${image})`,
      }}
    ></div>
    <div>
      <H3 heading={name} className="title" />
      <Body text={content} className="content" />
      <div className="project-buttons">
        <Button label="Live Demo" variant="filled" link={netlifyLink} />
        <Button label="View Code" variant="outlined" link={githubLink} />
        </div>
    </div>
  </div>
);

const ArticleCard = ({ title, date, content, image }) => (
  <div className="article-card">
    <div
      className="article-image"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(253, 111, 0, 0.30), rgba(253, 111, 0, 0.30)), url(${image})`,
      }}
    ></div>
    <div>
      <p className="date">{date}</p>
      <H3 heading={title} className="title" />
      <Body text={content} className="content" />
      <Button label="Read Article" variant="outlined" fullWidth />
    </div>
  </div>
);



