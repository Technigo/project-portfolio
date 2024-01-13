import React from "react";
import { LinkButton } from "./LinkButton";
import { Tag } from "./Tag";
import projectsData from "./projects";
import "./Project.css";
import "./Tag.css";

export const Project = () => {
  return (
    <>
      <h1>Projects</h1>
      <div className="project-container">
        {projectsData.projects.map((project, index) => {
          const {
            name,
            image,
            description,
            tags,
            github_url,
            deployed_page_url,
          } = project;

          return (
            <div className="project-card" key={index}>
              <h3>{name}</h3>
              <p>{description}</p>
              <img className="project-images" src={image} alt={name} />
              <div className="tag-container">
                {tags &&
                  Array.isArray(tags) &&
                  tags.map((item) => (
                    <Tag className="tag" key={item} tagText={item} />
                  ))}
              </div>
              <div className="button-container">
                <LinkButton url={deployed_page_url} buttonText="Live demo" />
                <LinkButton url={github_url} buttonText="View the code" />
              </div>
            </div>
          );
        })}
      </div>
      <img className="divider" src="./src/Icons/divider.png" />
    </>
  );
};

//Images shoutout: Photo by <a href="https://unsplash.com/@sheri_silver?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">sheri silver</a> on <a href="https://unsplash.com/photos/vanilla-ice-cream-with-sprinkles-5A0O12BIsjY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

//Photo by <a href="https://unsplash.com/@v_uk_europe?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Vit Ch</a> on <a href="https://unsplash.com/photos/pizza-with-tomato-and-green-leaves-on-white-ceramic-plate-Oxb84ENcFfU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

//Photo by <a href="https://unsplash.com/@umby?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Umberto</a> on <a href="https://unsplash.com/photos/gold-and-purple-beaded-necklace-QJuzFcO-p3A?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

//Photo by <a href="https://unsplash.com/@metelevan?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Andrey Metelev</a> on <a href="https://unsplash.com/photos/red-white-yellow-and-blue-plastic-dice-DEuansgqjns?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

//Photo by <a href="https://unsplash.com/@artbyhybrid?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Madison Oren</a> on <a href="https://unsplash.com/photos/low-angle-photo-of-pink-and-orange-balloons-uGP_6CAD-14?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

//Photo by <a href="https://unsplash.com/@artbyhybrid?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Madison Oren</a> on <a href="https://unsplash.com/photos/low-angle-photo-of-pink-and-orange-balloons-uGP_6CAD-14?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

//Photo by <a href="https://unsplash.com/@pineapple?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Pineapple Supply Co.</a> on <a href="https://unsplash.com/photos/several-pineapples-at-a-party-qWlkCwBnwOE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

//Photo by <a href="https://unsplash.com/@heyimmarielle_03?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Marielle Ursua</a> on <a href="https://unsplash.com/photos/a-person-holding-a-smart-phone-in-their-hand-wRrhYoqYIvM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

//Photo by <a href="https://unsplash.com/@douglasamarelo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Douglas Lopes</a> on <a href="https://unsplash.com/photos/a-laptop-computer-sitting-on-top-of-a-wooden-desk-ehyV_XOZ4iA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

//Photo by <a href="https://unsplash.com/@etiennegirardet?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Etienne Girardet</a> on <a href="https://unsplash.com/photos/black-flat-screen-tv-turned-on-at-the-living-room-EP6_VZhzXM8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
