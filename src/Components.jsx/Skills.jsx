import "./Skills.css";

export const Skills = () => {
  //   const splitIntoWords = (text) => text.split(" ");

  //   const skillsData = [
  //     {
  //       heading: "Code",
  //       content: "HTML CSS JavaScript React Styled components Github",
  //     },
  //     { heading: "Toolbox", content: "Figma Slack Stack Overflow" },
  //     { heading: "Upcoming", content: "Node.js" },
  //     { heading: "More", content: "" },
  //   ];

  return (
    //     <div className="Skills">
    //       <h1>Skills</h1>
    //       {skillsData.map((item, index) => (
    //         <div className="column" key={index}>
    //           <h2 className="code-heading">{item.heading}</h2>
    //           {splitIntoWords(item.content).map((word, wordIndex) => (
    //             <p key={wordIndex}>{word}</p>
    //           ))}
    //         </div>
    //       ))}
    //     </div>
    //   );
    // };

    <div className="Skills">
      <h1>Skills</h1>
      <div className="column">
        <h2 className="code-heading">Code</h2>
        <p>HTML CSS JavaScript React Styled components Github</p>
      </div>
      <div className="column">
        <h2 className="toolbox-heading">Toolbox</h2>
        <p>Figma Slack Stack Overflow</p>
      </div>
      <div className="column">
        <h2 className="upcoming-heading">Upcoming</h2>
        <p>Node.js</p>
      </div>
      <div className="column">
        <h2 className="more-heading">More</h2>
        <p></p>
      </div>
    </div>
  );
};
