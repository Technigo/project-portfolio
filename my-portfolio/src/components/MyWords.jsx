import "./MyWords.css";
import BlueArt from "/assets/BlueArt.jpg";
import BlueArt2 from "/assets/BlueArt2.jpg";
import GitBlackIcon from "../assets/GitBlackIcon.svg";

const MyWords = () => {
  return (
    <div className="my-words-container">
      <h2>My Words</h2>

      {/* Article 1 */}
      <div className="words-item">
        <img src={BlueArt} alt="Colorful Background" className="words-image" />
        
        <div className="word-text">
          <span className="date">July 14th</span>
          <h3>How to stop being scared: Learning to love code</h3>
          <p className="article-text">Learning to code can be intimidating at first. This article covers essential tips to help beginners build a strong foundation in programming</p>
          <button className="read-article-button">
            <img src={GitBlackIcon} alt="Git Icon" className="button-icon" />
            Read article
          </button>
        </div>
      </div>

      {/* Article 2 */}
      <div className="words-item">
        <img src={BlueArt2} alt="Grey Background" className="words-image" />
        
        <div className="word-text">
          <span className="date">August 3rd</span>
          <h3>The journey of coding: Embracing the challenges</h3>
          <p className="article-text">Explore how coding challenges can help developers grow, improve problem-solving skills, and build resilience in the tech world.</p>
          <button className="read-article-button">
            <img src={GitBlackIcon} alt="Git Icon" className="button-icon" />
            Read article
          </button>
        </div>
      </div>

      {/* Article 3 */}
      <div className="words-item">
        <img src={BlueArt} alt="Red Background" className="words-image-red" />
        
        <div className="word-text">
          <span className="date">September 21st</span>
          <h3>Mastering the basics: A guide for beginners</h3>
          <p className="article-text">Learning to code can be intimidating at first. This article covers essential tips to help beginners build a strong foundation in programming.</p>
          <button className="read-article-button">
            <img src={GitBlackIcon} alt="Git Icon" className="button-icon" />
            Read article
          </button>
        </div>
      </div>

    </div>
  );
};

export default MyWords;
