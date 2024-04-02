import React, { useEffect, useState } from "react";
import "./Project.css";
import data from "../data.json";
import live from "/assets/Live Demo.svg"
import github from "/assets/github.svg"

export const Project = () => {

  return (
    <div className="projectContainer">
      {data.map(e => (
        <div key={e.id} className="project">
          <img src={e.cover} alt="Project cover" className="projectCover" />
          <div className="projectDetail">
            <h4 className="projectTitle">{e.name}</h4>
            <p className="projectIntro">{e.description}</p>
            
            <div className="techContainer">
              {e.technics.map(t=>(
                <div className="technic">{t}</div>
              ))}
            </div>
            
            <div className="externalLink">
              <button className="live">
                <img src={live} alt="demo_live_logo" />
                <a href={e.live_url} target="_blank">Live Demo</a>
              </button>

              <button className="viewCodes">
                <img src={github} alt="github_logo" />
                <a href={e.git_url} target="_blank">View the code</a>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

