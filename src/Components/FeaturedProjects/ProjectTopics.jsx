import "./ProjectTopics.css";

export const ProjectTopics = ({ topics }) => {
  // This line checks if topics is falsy (i.e., null, undefined, 0, false, or an empty string). If topics is falsy, it immediately returns, which effectively means that the component doesn't render anything. This prevents potential errors if topics is not provided.
  if (!topics) return;
  return (
    <div className="project-topics">
      {/* Mapping over the topics-array */}
      {topics.map((topic) => (
        // For each topic in the topics array, it creates a <div> element with a class of project-topic. The key prop is set to the topic, which helps React keep track of the individual elements.
        <div className="project-topic" key={topic}>
          {topic}
        </div>
      ))}
    </div>
  );
};
