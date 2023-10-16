// Importing React components from their respective files
import Introducton from './components/introduction/Introduction';
import Tech from './components/tech/Tech';
import Articles from './components/articles/Articles';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

// Creating a functional component named App
const App = () => {
    return (
        <>
            {/* Rendering the Introduction component */}
            <Introducton />
            {/* Rendering the Tech component */}
            <Tech />
            {/* Rendering the Projects component */}
            <Projects />
            {/* Rendering the Articles component */}
            <Articles />
            {/* Rendering the Skills component */}
            <Skills />
            {/* Rendering the Contact component */}
            <Contact />
            {/* Rendering the Footer component */}
            <Footer />
        </>
    );
}

// Exporting the App component to be used in other files
export default App;
