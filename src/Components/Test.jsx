// export const ProjectCard = ({ repositories }) => {
//     // State that checks if buttons are in hover-state or not. Default is false.
//     const [isDemoButtonHovered, setIsDemoButtonHovered] = useState(false);
//     const [isGithubButtonHovered, setIsGithubButtonHovered] = useState(false);

//     <Button
//              className={"demo-btn"}
//           btnURL={repo.homepage}
//               imgAlt={"Web icon"}
//              /* checks if the state of the button is hovered, and then change the icon url, otherwise leaves the one that is default */
//               iconURL={isDemoButtonHovered[index] ? '/icons/globe-white.svg' : '/icons/globe.svg'}
//               btnText={"Live demo"}
//               /* the methods onMouseEnter and onMouseLeave states to true and false depending on the pointer*/
//                onMouseEnter={() => setIsDemoButtonHovered({ ...isDemoButtonHovered, [index]: true })}
//               onMouseLeave={() => setIsDemoButtonHovered({ ...isDemoButtonHovered, [index]: false })}
//                                 />

//                                 import "./button.css";

// export const Button = ({ className, btnURL, iconURL, imgAlt, btnText, onMouseEnter, onMouseLeave }) => {
//     return (
//         <a href={btnURL}>
//             <button className={`button ${className}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
//                 <img src={iconURL} alt={imgAlt} />
//                 {btnText}
//             </button>
//         </a>
//     )
// }
