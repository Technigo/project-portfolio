import { Project } from "./Project"

export const Projectlist = () => {
  return (
    <div>
      <h2>Featured Projects</h2>
      <Project />
    </div>
  );
};

// //import { useState } from 'react'
// import { Card } from './components/Card'
// import './App.css'
// import { projects } from "../projects.json"

// export const App = () => {
// 	console.log(projects)
	

// 	return (
//     <div>
// 			{projects.map((project, index) => (
// 				<Card key={index} project={project} />
// 			))}
// 			{/* <Card projects={projects}/> */}
// 		</div>
// 	)
// }
