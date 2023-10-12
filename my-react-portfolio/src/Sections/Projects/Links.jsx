// import { useState, useEffect } from 'react'
// import styles from "./Links.module.css";

// export const Links = () => {

//     // Adapt to your own GitHub account 
//     const [repoData, setRepoData]

//     const fetchGithubData = async () => {

//         try {
//             const response = await fetch(""); //set your own github username
//             if (!response.ok) {
//                 throw new Error("Failed to fetch data from Github API");
//             }
//             const data = await response.json()
//             console.log(data)

//             if (data.length > 0) {
//                 setRepoData(data[0].description);
//             }

//         } catch (error) {
//             console.error(error);
//         }
//     };

//     useEffect(() => {
//         fetchGithubData();
//     }, []);

//     return <div>{repoData}</div>;

// };

// // ---------------------------------------------------

// export const Links = () => {

//     const fetchGithubData = async () => {

//         await fetch("https://api.github.com/users/YourGitHubProfile/repos")
//             .then((res) => res.json())
//             .then((data) => console.log(data))
//             .catch((err) => console.log(err));
//     };

//     useEffect(() => {
//         fetchGithubData;
//     }, []);

//     return (

//         <div className={styles.button - wrapper}>
//             <a
//                 href=""
//                 target="_blank"
//                 rel="noopener noreferrer"
//             >
//                 <button type="button">
//                     <img src="" alt="github image" />
//                     <span>""</span>
//                 </button>
//             </a>
//             <a
//                 href=""
//                 target="_blank"
//                 rel="noopener noreferrer"
//             >
//                 <button type="button">
//                     <img src="" alt="Live Demo Image" />
//                     <span> "" </span>
//                 </button>
//             </a>
//         </div>
//     )

// };


