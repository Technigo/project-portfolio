import { BtnLive } from './ButtonLive.jsx';
import { BtnCode } from './ButtonCode.jsx';
import { Tag } from './Tag.jsx';
import "./Projects.css"

import PropTypes from "prop-types";


export const Info = () => {
  return (
    <div className="info">
      <div className="div">
        <div className="tech-tags">
          <Tag className="tag-instance" text="HTML5" />
          <Tag className="tag-instance" text="CSS3" />
          <Tag className="tag-instance" text="React" />
          <Tag className="tag-instance" text="Node" />
        </div>
        <div className="h">Chatbot built in javascript</div>
        <p className="body">
          The chat bot app is a conversational AI-powered tool designed to
          enhance user experience by providing instant, personalized, and
          automated responses to user inquiries.
        </p>
      </div>
      <div className="btns">
        <BtnLive />
        <BtnCode />

      </div>
    </div>
  );
};
Info.propTypes = {
  icWeb: PropTypes.string,
  icGithub: PropTypes.string,
};