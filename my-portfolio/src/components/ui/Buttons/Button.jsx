/* eslint-disable react/prop-types */
import "./Button.css";

export const Button = ({ text, icon, onClick, sectionType = "default", isViewMore }) => {
  // Determine if the button is "View More" and combine with sectionType
  const buttonClass = isViewMore
    ? `${sectionType}-view-more-button`  // For "View More" button with sectionType
    : `${sectionType}-button`;  // For normal button based on sectionType

  return (
    <button className={`button ${buttonClass}`} onClick={onClick}>
      {icon && <img src={icon} alt="icon" className={`${sectionType}-button-icon`} />}
      {text}
    </button>
  );
};

//   return (
//     <button className={`button ${viewMoreClass} ${combinedClass}`} onClick={onClick}>
//       {icon && <img src={icon} alt="" className={`${sectionType}-button-icon`} />}
//       {text}
//     </button>
//   );
// };

// return (
//   <button 
//     className={`button ${sectionType}-button ${ViewMoreClass}`} 
//     onClick={onClick}
//   >
//     {icon && <img src={icon} alt="icon" className={`${sectionType}-button-icon`} />}
//     {text}
//   </button>
// );
// };

// const viewMoreClass = isViewMore ? "view-more-button" : `${sectionType}-button`;
// const combinedClass = `${viewMoreClass} ${sectionType}-view-more`;