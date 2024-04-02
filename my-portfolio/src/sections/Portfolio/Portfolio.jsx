import { useState, useEffect, useRef } from "react";
import { Introduction } from "../Introduction/Introduction";
import { Tech } from "../Tech/Tech";
import { FeaturedProjects } from "../Featured projects/FeaturedProjects";
import { Skills } from "../Skills/Skills";
import { Contact } from "../Contact/Contact";
import "./Portfolio.css";
import projectImages from "./projectImages.json";
import { TickerTapeBanner } from "../Contact/TickerTapeBanner";
import arrowSvg from "/icons/arrow.svg";

export const Portfolio = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const techSectionRef = useRef(null);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [projects, setProjects] = useState([]);
  const [showAllProjects, setShowAllProjects] = useState(false);

  useEffect(() => {
    // Fetch repositories when component mounts
    fetchRepositories();
  }, []);

  const fetchRepositories = () => {
    const URL = "https://api.github.com/users/ericamechler/repos";

    setError(null);

    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not load repositories");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const avatar = data[0]?.owner?.avatar_url;
        // Filter out the "Portfolio"-project
        const filteredProjects = data
          .filter((project) => project.name !== "Portfolio")
          .map((project) => ({
            id: project.id,
            name: project.name,
            description: project.description,
            htmlUrl: project.html_url,
            topics: project.topics,
            homepage: project.homepage,
            // Find the corresponding image path from the JSON data
            imagePath:
              projectImages.find((image) => image.projectName === project.name)
                ?.imagePath || "",
          }));
        setAvatarUrl(avatar);
        setProjects(filteredProjects);
      })
      .catch((error) => {
        setError("Error loading repositories. Please try again later");
      })
      .finally(() => {
        setLoading(false); // Update loading state when fetching is done
      });
  };

  const scrollToTechSection = () => {
    if (techSectionRef.current) {
      techSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }

    // Function to toggle showing all projects or only starred projects
    const toggleShowAllProjects = () => {
      setShowAllProjects(!showAllProjects);
    };
  };

  return (
    <div className="main-wrapper">
      <header>
        <Introduction
          scrollToTechSection={scrollToTechSection}
          avatarUrl={avatarUrl}
        />{" "}
        <div className="arrow-container">
          <button onClick={scrollToTechSection}>
            <img className="arrow" src={arrowSvg} alt="arrow icon" />
          </button>
        </div>
      </header>
      <main>
        <Tech techSectionRef={techSectionRef} />
        <FeaturedProjects
          projects={projects}
          showAllProjects={showAllProjects}
        />
        <Skills />
      </main>
      <footer>
        <Contact avatarUrl={avatarUrl} />
        <TickerTapeBanner />
      </footer>
    </div>
  );
};
