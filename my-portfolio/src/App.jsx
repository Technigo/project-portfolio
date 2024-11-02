import { Header } from "./sections/Header"
import { ProjectsGallery } from "./sections/ProjectsGallery"
import { Bio } from "./sections/Bio"
import { FeaturedProjects } from "./sections/FeaturedProjects"
import "./App.css"


export const App = () => {

  return (
    <><Header />
      <ProjectsGallery />
      <Bio />
      <FeaturedProjects /></>
    // <Tech />
    // <Skills />
    // <Words />
    // <Contact/>
  )
}


//Structure of folders and components
///src
// ├── ui                   // Reusable components
// │   ├── Button.js
// │   ├── Card.js          // Generic card component for articles and projects
// │   ├── Heading.js       //H2 Heading
// │   ├── Icon.js
// │   ├── Image.js
// │   ├── TagButton.js
// │   └── TextBox.js
// │
// ├── sections             // Specific sections of the portfolio
// │   ├── Header.js         H1 heading and H3 headings
// │   ├── ProjectsGallery.js 
// │   ├── Bio.js
// │   ├── FeaturedProjects.js 
// │   ├── Tech.js
// │   ├── Skills.js
// │   ├── Words.js         
// │   ├── Contact.js       
// │   └── Footer.js
// │
// └── styles               // CSS or styling files