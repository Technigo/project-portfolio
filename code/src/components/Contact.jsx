import React from "react";
import LinkedBtn from "./LinkedBtn";
import GithubBtn from "./GithubBtn";

const Contact = () => {
    return (
        <div className="contact">
            <h1>Let's talk</h1>
            <img className="contact-img" src="Lisa.JPG" alt="A picture of Lisa Dahlkar" />
            <p>Lisa Dahlkar <br />
                lisa.dahlkar@gmail.com</p>
            <div className="contact-buttons">
                <a href="https://www.linkedin.com/in/lisa-dahlkar-401183174/" target="_blank" rel="noopener noreferrer">
                    <LinkedBtn />
                </a>
                <a href="https://github.com/lisawh0/" target="_blank" rel="noopener noreferrer">
                    <GithubBtn />
                </a>
            </div>
        </div>
    );
};

export default Contact; 