import { Header } from "./sections/Header"
import { ProjectsGallery } from "./sections/ProjectsGallery"
import { Bio } from "./sections/Bio"
import { FeaturedProjects } from "./sections/FeaturedProjects"
import { Tech } from "./sections/Tech"
import { Skills } from "./sections/Skills"
import { Words } from "./sections/Words"
import { Contact } from "./sections/Contact"
import "./App.css"


export const App = () => {

  return (
    <><Header />
      <ProjectsGallery />
      <Bio />
      <FeaturedProjects />
      <Tech />
      <Skills />
      <Words />
      <Contact /></>
  )
}


//Structure of folders and components
///src
// ├── ui                   // Reusable components
// │   ├── Button.jsx
// │   ├── ArticleCard.js   // Generic card component for articles
//      ── ProjectCard.js   // Generic card component for projects
// │   ├── Heading.js       //H2 and H3 Headings
// │   ├── Icon.js
// │   ├── Image.js
// │   ├── Tag.css
// │   
// │
// ├── sections             // Specific sections of the portfolio
// │   ├── Header.js         H1 heading and H3 headings
// │   ├── ProjectsGallery.jsx 
// │   ├── Bio.js
// ├   ├── FeaturedProjects.jsx
// │   ├── Tech.js
// │   ├── Skills.jsx
// │   ├── Words.jsx         
//     └── Contact.jsx
// │  
// │   
// │
// └── styles               // CSS for all sections
// │  
// │   
// │
// └──Data  // articles.json, projects.json and skills.json
 
// │   
// │
// └──Public  // Images that are linked in the json files.

// │   
// │
// └──Assets  // Other images on the page.
