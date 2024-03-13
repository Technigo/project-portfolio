import React from "react";
import './skills.css';

const Skills = () => {
    return (
        <div className="skills">
            <h1>Skills</h1>
            <div className="skills-content">
                <div className="skills-child">
                    <div className="code">
                        <div>
                            <h2>Code</h2>
                            <p>
                                HTML5<br />
                                CSS3<br />
                                Javascript ES6<br />
                                React<br />
                                Styled Components<br />
                                GitHub
                            </p>
                        </div>
                    </div>
                </div>

                <div className="skills-child">
                    <div className="toolbox">
                        <div>
                            <h2>Toolbox</h2>
                            <p>
                                Atom<br />
                                Postman<br />
                                Adobe Photoshop<br />
                                Adobe Illustrator<br />
                                Figma<br />
                                Keynote<br />
                                Slack
                            </p>
                        </div>
                    </div>
                </div>

                <div className="skills-child">
                    <div className="upcoming">
                        <div>
                            <h2>Upcoming</h2>
                            <p>
                                Node.js
                            </p>
                        </div>
                    </div>
                </div>

                <div className="skills-child">
                    <div className="more">
                        <div>
                            <h2>More</h2>
                            <p>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
