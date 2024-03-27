import "./FpChild.css";

export const FpChild = () => {
  return (
    <div className="FpChild-box">
      <div className="project-img-wrapper">
        <img className="project-img" src="" alt="project-image"></img>
      </div>
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
