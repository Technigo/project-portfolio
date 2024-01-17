// /* eslint-disable react/jsx-key */
// /* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { Button } from "../../components/Button";
import { Photo } from "../../components/Photo";
import "./Project.css";

export const Project = ({ title, description, tags, id }) => {
  console.log(title);

  //   switch (title) {
  //     case "Portfolio-Project":
  //       imagedirectory = portfolio;
  //       break;
  //     case "Happy-Thoughts-Project":
  //       imagedirectory = happyThoughts;
  //       break;
  //     case "Survey-Project":
  //       imagedirectory = survey;
  //       break;
  //     case "Music-Releases-Project":
  //       imagedirectory = music;
  //       break;
  //     case "Weather-App-Project":
  //       imagedirectory = weather;
  //       break;
  //     case "Movie-Project":
  //       imagedirectory = movie;
  //       break;
  //     case "project-qr-code-generator":
  //       imagedirectory = qrcode;
  //       break;
  //   }

  return (
    <>
      <Photo source={Photo} color="blue" mode="square" />
      <h2>{title}</h2>
      <p>{description}</p>
      {tags.map((tag) => {
        return (
          <p key={`${id} ${tag}`} className="tag">
            <span className="w3-tag">{tag}</span>
          </p>
        );
      })}
      <Button />
    </>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,

  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
