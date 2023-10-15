// import "../Texts/text.css";

// export const Tag = ({ tagText }) => {
//     console.log("tagText type:", typeof tagText);
//     console.log("tagText value:", tagText);


//     return (
//         <div className="tag-background">
//             {tagText.map((tag, index) => {
//                 return (
//                     <span key={index} className="tag-text">
//                         {tag}
//                     </span>
//                 );
//             })}
//         </div>
//     );
// };

import "../Texts/text.css";

export const Tag = ({ tagText }) => {
    return (
        <div className="tag">
            {tagText.map((tag, index) => (
                <span key={index} className="tag-background">
                    <p className="tag-text">{tag}</p>
                </span>
            ))}
        </div>
    );
};

