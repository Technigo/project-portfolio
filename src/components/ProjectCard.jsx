import Links from "./Links";

export const ProjectCard = [
  { text: "Live Demo 1", url: "https://demo1.com", icon: "demo1-icon.png" },
  { text: "Live Demo 2", url: "https://demo2.com", icon: "demo2-icon.png" },
  // Add more buttons as needed
];

const ProjectCard = () => {
  return (
    <div>
      {/* Other content for the "Featured Work" section */}
      <Links buttons={featuredWorkButtons} />
    </div>
  );
};
