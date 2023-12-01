import "./BigHeadlines.css";

export const BigHeadlines = ({ sectionId }) => {

  const bigHeadlineCollection = [
    {
      sectionId: 1,
      text: "Fullstack Developer"
    },
    {
      sectionId: 2,
      text: "Tech"
    },
    {
      sectionId: 3,
      text: "Featured Projects"
    },
    {
      sectionId: 4,
      text: "My Words"
    },
    {
      sectionId: 5,
      text: "Skills"
    },
    {
      sectionId: 6,
      text: "Let's talk"
    }
  ];
  

  return (
    <h1 key={sectionId} className={
      `${sectionId}` == 2 || `${sectionId}` == 5 ? "white" : 
      `${sectionId}`== 4 ? "pink" : "blue"}>
      {bigHeadlineCollection.map((headline) => headline.text)[sectionId - 1]}
    </h1>
  );
};
