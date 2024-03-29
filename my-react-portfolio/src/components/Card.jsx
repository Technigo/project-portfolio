import { Photo } from "./Photo";
import { Tag } from "./Tag";
import { Button } from "./Button";
import techImage from "/tech-image.jpg";
import "./Card.css";

export const Card = () => {
  return (
    <div className="Card-box">
      <Photo source={techImage} color="blue" size="small" />
      <div className="project-info-wrapper">
        <div className="description-and-tags">
          <h2>Chatbot</h2>
          <p>
            The chat bot app is a conversational AI-powered tool designed to
            enhance user experience by providing instant, personalized, and
            automated responses to user inquiries.
          </p>
          <div className="tech-tags">
            <Tag tagName="HTML5" />
            <Tag tagName="CSS3" />
            <Tag tagName="React" />
            <Tag tagName="Node" />
          </div>
        </div>
        <div className="button-wrapper">
          <Button
            className="live-demo"
            label="Live demo"
            icon="fa-solid fa-globe"
          />
          <Button
            className="view-the-code"
            label="View the code"
            icon="fab fa-github"
          />
        </div>
      </div>
    </div>
  );
};
