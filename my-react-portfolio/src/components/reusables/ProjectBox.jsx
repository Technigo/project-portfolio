import { SubHeading } from './SubHeading.jsx'
import LiveDemo from '../../assets/LiveDemo.svg'
import ViewCode from '../../assets/ViewCode.svg'
import './ProjectBox.css'

export const ProjectBox = () => {

  return (
    <div className="project-list">

      <div className="box-wrapper">
        <div className="img-container">
          <img className="project-img" src="./happythoughts.png" alt="Project image" />
        </div>
        <div className="project-card">
          <SubHeading
            subHeading="Rescue Helper"
            className="project-sub" />
          <div className="project-info">
            <div className="project-text">
              <p>An imaginary dog adoption site, that displays dogs across multiple dog shelters.
                Users can filter dogs with a search form, and shelters can log in to add and delete dogs from the database.
              </p>
            </div>
            <div className="tech-details">
              <p className="tech-block">REACT</p>
              <p className="tech-block">CSS MODULES</p>
              <p className="tech-block">EXPRESS.JS</p>
              <p className="tech-block">MONGODB</p>
            </div>
            <div className="link-buttons">
              <img src={ViewCode} className="view-code" />
              <img src={LiveDemo} className="live-demo" />
            </div>
          </div>
        </div>
      </div>

      <div className="box-wrapper">
        <div className="img-container">
          <img className="project-img" src="./happythoughts.png" alt="Project image" />
        </div>
        <div className="project-card">
          <SubHeading
            subHeading="Project Happy Thoughts"
            className="project-sub" />
          <div className="project-info">
            <div className="project-text">
              <p>An application where the user can send happy thoughts, view others' entries and like them.</p>
            </div>
            <div className="tech-details">
              <p className="tech-block">REACT</p>
              <p className="tech-block">CSS</p>
              <p className="tech-block">EXPRESS.JS</p>
              <p className="tech-block">MONGODB</p>
            </div>
            <div className="link-buttons">
              <img src={ViewCode} className="view-code" />
              <img src={LiveDemo} className="live-demo" />
            </div>
          </div>
        </div>
      </div>

      <div className="box-wrapper">
        <div className="img-container">
          <img className="project-img" src="./happythoughts.png" alt="Project image" />
        </div>
        <div className="project-card">
          <SubHeading
            subHeading="Guess Who: Middle-Earth Quest"
            className="project-sub" />
          <div className="project-info">
            <div className="project-text">
              <p>A Lord of the Rings themed Guess Who game.</p>
            </div>
            <div className="tech-details">
              <p className="tech-block">JAVASCRIPT</p>
              <p className="tech-block">CSS</p>
              <p className="tech-block">HTML</p>
            </div>
            <div className="link-buttons">
              <img src={ViewCode} className="view-code" />
              <img src={LiveDemo} className="live-demo" />
            </div>
          </div>
        </div>
      </div>

      <div className="box-wrapper">
        <div className="img-container">
          <img className="project-img" src="./happythoughts.png" alt="Project image" />
        </div>
        <div className="project-card">
          <SubHeading
            subHeading="Hot Java Coffee Chatbot"
            className="project-sub" />
          <div className="project-info">
            <div className="project-text">
              <p>A chatbot where a charming coffee cup Cuppa takes your order.</p>
            </div>
            <div className="tech-details">
              <p className="tech-block">JAVASCRIPT</p>
              <p className="tech-block">CSS</p>
              <p className="tech-block">HTML</p>
            </div>
            <div className="link-buttons">
              <img src={ViewCode} className="view-code" />
              <img src={LiveDemo} className="live-demo" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProjectBox