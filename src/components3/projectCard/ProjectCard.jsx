import React from "react";
import repoImages from "/src/repoImages.json";
import repos from "../../../repos.json" //IMPORTING REPOS AS JSON AS MY API ISN'T WORKING???

import { HeadingH1 } from "../../components2/typography/headingH1/HeadingH1";
import { HeadingH3 } from "../../components2/typography/headingH3/HeadingH3";
import { NormalText } from "../../components2/typography/normalText/NormalText";
import { ProjectImg } from "../../components2/images/projectImg";
import { Button } from "../../components2/button/Button"
import { Tag } from "../../components2/tag/Tag"

import "./projectCard.css";

export const ProjectCard = ({ projects }) => {
  console.log(repos)
  console.log(projects)
  const namesToFilter = [
    "Happy-Thoughts-API",
    "Chatbot",
    "Survey",
    "Music-Releases",
    "Guess-Who",
    "Quiz-Coding-Myths", 
    "Design-Handoff", 
    "Weather-App", 
    "QR-code-generator", 
    "Movie-Site-Project", 
    "Quiz"
  ]; //Array including the projects I want to show in portfolio

  //Specify the desired order of projects: 
  const projectOrder = [
    "Happy-Thoughts-API",
    "QR-code-generator", 
    "Design-Handoff", 
    "Quiz-Coding-Myths", 
    "Quiz",
    "Movie-Site-Project", 
    "Survey",
    "Music-Releases",
    "Weather-App", 
    "Guess-Who",
    "Chatbot",
  ]

  //Filtering the projects I want to display in portfolio
  const filteredProjects = repos.filter((project) =>
    namesToFilter.includes(project.name)
  ); 

  console.log(filteredProjects)

  // Use the specified order to display projects
const orderedProjects = projectOrder.map((projectName) =>
filteredProjects.find((project) => project.name === projectName)
)

  return (
    <>
      <section className="project-wrapper">
        <HeadingH1 className="project-h1" text={"Featured Projects"} />

        {orderedProjects.map((project) => {
          // Finding the corresponding image data in 'repoImages' based on the project's name
          const repoImage = repoImages.find(
            (img) => img.repoName === project.name
          )

          return (
            <div className="project-card" key={project.id}>
              <ProjectImg src={repoImage?.imageUrl} alt={repoImage.alt} />

              <div className="project-card-info">
                <HeadingH3 className={"project-h3"} text={project.name} />

                <NormalText
                  className="project-card-text"
                  text={project.description}
                />

                <div className="project-card-tags">
                  <Tag topics={project.topics} />
                </div>

                <div className="project-card-buttons">
                  <Button
                    text={"Live demo"}
                    hoverColor={"blue"}
                    link={project.homepage}
                  />
                  <Button
                    text={"View the code"}
                    hoverColor={"pink"}
                    link={project.html_url}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};
