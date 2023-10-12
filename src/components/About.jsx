import miko from "/images/huadanimage.png";
import music from "/icons/music-record.png";
import jazz from "/icons/jazz.mp3";
import "./styleComponents/about.css";
import ReactTypingEffect from "react-typing-effect";
import { Link } from "react-scroll";
import { useState, useRef } from "react";
import { ContactIcon } from "./reuseCompoents/ContactIcon";

export const About = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(jazz));
  //use the useRef hook to create a persistent reference to the Audio object. This ensures that the same audio element is used across renders.

  const toggleMusic = () => {
    const audio = audioRef.current; // Get the audio element from the ref
    audio.loop = true; // Set the audio to loop
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="about-section" aria-label="About Huadan Zhu">
      <div
        className={`music-record ${isPlaying ? "spinning" : ""}`}
        onClick={toggleMusic}
        role="button"
        tabIndex={0}
        aria-label="Toggle Music"
      >
        <img src={music} alt="music record jazz" />
      </div>
      <section className="name-developer-wrapper">
        <h3 className="miko-name">👋 Hi! My name is Huadan Zhu</h3>
        <h1 className="developer">
          <ReactTypingEffect
            text={[" Full-Stack Developer", "Front-end Developer"]}
            speed="100"
            typingDelay="200"
            eraseDelay="200"
          />
        </h1>
      </section>
      <section className="about-main-wrapper">
        <div className="img_place_container">
          <img src={miko} alt="Huadan's image" />
          <p className="place">Stockholm, Sweden</p>
        </div>
        <article className="introduction">
          Huadan is a talented developer who is embarking on a career transition
          from the field of HRM to web development. With a master's degree in
          HRM and seven years of experience in human resources management, I
          have developed strong skills in adaptability, a growth mindset, and
          the confidence to tackle new challenges. As a web developer, I am
          excited to leverage these qualities to solve complex problems,
          continue exploring new skills, and further improve as a developer. My
          background in HRM provides me with a unique perspective that I believe
          will make a positive contribution to the world of web development.
        </article>
      </section>
      <div className="contact-top-icons">
        <ContactIcon />
      </div>

      <button type="button" name="next-button" className="next-button">
        <Link activeClass="active" smooth spy to="tech">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="36"
            viewBox="0 0 29 36"
            fill="none"
            aria-label="next button"
          >
            <path
              d="M24 23.5L14.5 33M14.5 33L5 23.5M14.5 33L14.5 3"
              stroke="#FF4575"
              strokeWidth="6"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </button>
    </div>
  );
};
