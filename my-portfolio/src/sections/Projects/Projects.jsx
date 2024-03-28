import { useState, useEffect } from "react";
import { Title } from "../../components/Title";
import { ProjectsCard } from "./ProjectsCard";

export const Projects = () => {
  const [projectData, setProjectData] = useState([]);
  const [error, setError] = useState();

  const url = "https://api.github.com/users/jyy009/repos";

  const fetchProjects = async () => {
    await fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error fetching projects");
        }
        return res.json();
      })
      .then((data) => {
        setProjectData(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="project-container">
      <Title 
      text={"Featured Projects"}
      elementClassName={"project-header"}
      />

      {error ? (
        <p>Error: {error.message} </p>
      ) : (
        <ProjectsCard repositories={projectData} />
      )}
    </div>
  );
};
