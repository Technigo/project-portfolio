import React, { useState, useEffect } from "react";
import { TechSection } from "./TechSection";
import { Header } from "./HeaderSection";
import { Skills } from "./Skills";
import { Contact } from "./ContactSection";
import { ProjectSection } from "./ProjectSection";

export const Portfolio = () => {
  const [repositories, setRepositories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRepositories();
  }, []);

  const fetchRepositories = async () => {
    const URL = "https://api.github.com/users/JohannaBN/repos";

    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("Could not load repositories");
      }
      const data = await response.json();
      // Sort the repositories based on the created_at date with newest first
      const sortedRepositories = data.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
      setRepositories(sortedRepositories);
    } catch (error) {
      setError(error.message); // Set error message in state
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <>
        {repositories.length > 0 && (
          <>
            <Header repo={repositories[0]} />
            <TechSection />
            <ProjectSection repositories={repositories} />
            <Skills />
            <Contact repo={repositories[0]} />
          </>
        )}
      </>
    </div>
  );
};

// import React, { useState, useEffect } from "react";
// import { TechSection } from "./TechSection";
// import { Header } from "./HeaderSection";
// import { Skills } from "./Skills";
// import { Contact } from "./ContactSection";
// import { ProjectSection } from "./ProjectSection";

// export const Portfolio = () => {
//   return (
//     <div>
//       <>
//         <Header repo={repositories[0]} />
//         <TechSection />
//         <ProjectSection />
//         <Skills />
//         <Contact repo={repositories[0]} />
//       </>
//     </div>
//   );
// };
