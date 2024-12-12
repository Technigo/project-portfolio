export const SectionHead = ({ headlineId }) => {
  const sectionHeadArray = [
    {
      headlineId: 1,
      text: "Frontend Developer",
      className: "homescreen-title",
    },
    {
      headlineId: 2,
      text: "Tech",
      className: "tech-title",
    },
    {
      headlineId: 3,
      text: "Featured Projects",
      className: "feature-project-title",
    },
    {
      headlineId: 4,
      text: "My Words",
      className: "my-words-title",
    },
    {
      headlineId: 5,
      text: "Skills",
      className: "skills-title",
    },
    {
      headlineId: 6,
      text: "Let's Talk",
      className: "contact-me-title",
    },
  ];
  return (
    <h1 key={headlineId} className={sectionHeadArray[headlineId - 1].className}>
      {sectionHeadArray[headlineId - 1].text}
    </h1>
  );
};
