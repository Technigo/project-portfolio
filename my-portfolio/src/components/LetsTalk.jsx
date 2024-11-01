import React from "react";
import "./LetsTalk.css";
import profilePicture from "../assets/profilepicture.jpg";

const LetsTalk = () => {
  return (
    <div className="lets-talk-container">
      <h2>Let's Talk</h2>
      <div className="lets-talk-text">
      <div>
      <img src={profilePicture} alt="Picture of Elina" className="profile-picture" />
      </div>
      <div className="lets-talk-box">Elina Eriksson Hult</div>
      <div className="lets-talk-box">+46 (0) 793366458</div>
      <div className="lets-talk-box">elinaerikssonhult@gmail.com</div>
      </div>
      {/* INSERT 4 BUTTONS HERE W ICONS */}
    </div>
  );
};

export default LetsTalk;
