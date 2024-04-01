import React, { useEffect, useState } from "react";
import "./Project.css";
import data from "../data.json";


console.log(data);

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
                <div className="technich">{t}</div>
              ))}
            </div>
            
            <div className="externalLink">
              <a href={e.live_url} target="_blank"><button>Live Demo</button></a>
              <a href={e.git_url} target="_blank"><button>View the code</button></a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

