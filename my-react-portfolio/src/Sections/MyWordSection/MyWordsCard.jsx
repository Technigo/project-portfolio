// import React from "react";
// import "./mywordscard.css";
// import { MainTitle } from "../../ReusableComponents/Texts/MainTitle";

// export const MyWordsCard = ({ mywords }) => {
//     return (
//         <div className="projWrapperMywords">
//             <div className="projectContainer">
//                 <img src={mywords.image} height={200} alt="Project Image" />
//                 <div className="projectDescription">
//                     <a href={mywords.github} target="_blank" rel="noopener noreferrer">
//                         {mywords.name}
//                     </a>
//                     <h2 className="project-title">{mywords.name}</h2>

//                     <div className="readmeContent">
//                         <p>{mywords.description}</p>
//                     </div>
//                     <div className="project-tags">
//                         {mywords.tags.map((tag, index) => (
//                             <span key={index}></span>
//                         ))}
//                     </div>
//                     <div className="project-buttons">
//                         <button>button</button>
//                         <button>button</button>
//                         <button>button</button>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     )
// }