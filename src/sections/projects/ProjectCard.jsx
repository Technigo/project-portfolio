import githubBtn from "/icons/githubBtn.png";
import githubBtnHover from "/icons/githubBtnHover.png"
import liveDemoBtn from "/icons/liveDemoBtn.png";
import liveDemoBtnHover from "/icons/liveDemoBtnHover.png";
import { MediumsizedTitle } from "../../reusableComponents/texts/MediumsizedTitle";
import { NormalText } from "../../reusableComponents/texts/NormalText";
import { Tags } from "../../reusableComponents/buttons/Tags";
import "./ProjectCard.css";

export const ProjectCard = ({ name, image, description, tags, netlify, github }) => {
    return (
        <div className="project-container">
            <div className="project-image">
                <img src={image} alt='project image' />
            </div>
            <div className="project-info">
                <MediumsizedTitle mediumHeader={name} />
                <NormalText text={description} />
                <Tags taglist={tags} />
                <div className="button-container">
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="link to the github"
                    >
                        <button type="button" aria-label="go to the github">
                            <img
                                className="github-btn"
                                src={githubBtn}
                                alt="github image"
                                role="button"
                                tabIndex={0} />
                            <img
                                className="github-btn-hover"
                                src={githubBtnHover}
                                alt="github image"
                                role="button"
                                tabIndex={0} />
                        </button>
                    </a>
                    <a
                        href={netlify}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="link to live demo">
                        <button type="button" aria-label="go to live demo">
                            <img
                                className="livedemo-btn"
                                src={liveDemoBtn}
                                alt="Live Demo Button"
                                role="button"
                                tabIndex={0} />
                            <img
                                className="livedemo-btn-hover"
                                src={liveDemoBtnHover}
                                alt="Live Demo Button"
                                role="button"
                                tabIndex={0} />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}


