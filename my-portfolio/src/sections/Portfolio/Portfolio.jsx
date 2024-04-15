import arrowSvg from "/icons/arrow.svg";
import { useEffect, useRef, useState } from "react";
import { Triangle } from "react-loader-spinner";

import { Contact } from "../Contact/Contact";
import { TickerTapeBanner } from "../Contact/TickerTapeBanner";
import { FeaturedProjects } from "../Featured projects/FeaturedProjects";
import { Introduction } from "../Introduction/Introduction";
import { Skills } from "../Skills/Skills";
import { Tech } from "../Tech/Tech";
import projectImages from "./projectImages.json";

import "./Portfolio.css";

export const Portfolio = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(true);
  const techSectionRef = useRef(null);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [projects, setProjects] = useState([]);
  const [showAllProjects, setShowAllProjects] = useState(false);

  useEffect(() => {
    fetchRepositories();
  }, []);

  const fetchRepositories = async () => {
    const URL = "https://api.github.com/users/ericamechler/repos";

    try {
      setError(null);
      setLoading(true);
      setImageLoading(true);

      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("Could not load repositories");
      }

      const data = await response.json();
      const avatar = data[0]?.owner?.avatar_url;

      const filteredProjects = data
        .filter(
          (project) =>
            project.name !== "Portfolio" &&
            project.description &&
            project.topics &&
            project.topics.length > 0
        )
        .map((project) => ({
          id: project.id,
          name: project.name,
          description: project.description,
          htmlUrl: project.html_url,
          topics: project.topics,
          homepage: project.homepage,
          imagePath:
            projectImages.find((image) => image.projectName === project.name)
              ?.imagePath || "",
        }));

      setAvatarUrl(avatar);
      setProjects(filteredProjects);
    } catch (error) {
      setError("Error loading repositories. Please try again later");
    } finally {
      // Set a 1-second delay
      setTimeout(() => {
        setLoading(false);
        setImageLoading(false);
      }, 1000);
    }
  };

  const scrollToTechSection = () => {
    if (techSectionRef.current) {
      techSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleShowAllProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  // Show loading spinner if either the content or the image is loading
  if (loading || imageLoading) {
    return (
      <div className="loading-wrapper">
        <Triangle width={100} color="black" aria-label="Loading triangle" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-message">
        <h3>{error}</h3>
      </div>
    );
  }

  return (
    <div className="main-wrapper">
      <header>
        <Introduction
          scrollToTechSection={scrollToTechSection}
          avatarUrl={avatarUrl}
        />
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

/* export const Portfolio = () => {
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

  const fetchRepositories = async () => {
    const URL = "https://api.github.com/users/ericamechler/repos";

    try {
      setError(null);
      setLoading(true);

      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("Could not load repositories");
      }

      const data = await response.json();
      console.log(data);
      const avatar = data[0]?.owner?.avatar_url;

      // Filter out the "Portfolio"-project and check for topics and description
      const filteredProjects = data
        .filter(
          (project) =>
            project.name !== "Portfolio" &&
            project.description &&
            project.topics &&
            project.topics.length > 0
        )
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
    } catch (error) {
      setError("Error loading repositories. Please try again later");
    } finally {
      setLoading(false); // Update loading state when fetching is done
    }
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

  if (loading) {
    return (
      <div className="loading-wrapper">
        <Triangle width={200} color="black" aria-label="Loading triangle" />
      </div>
    );
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

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
 */
