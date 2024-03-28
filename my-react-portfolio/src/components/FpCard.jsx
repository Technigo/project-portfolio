import { Photo } from "./Photo";
import techImage from "/tech-image.jpg";
import "./FpCard.css";

export const FpCard = () => {
  return (
    <div className="FpCard-box">
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
            <p>tags</p>
          </div>
        </div>
        <div className="buttons">
          <button className="button">Live demo</button>
        </div>
      </div>
    </div>
  );
};
