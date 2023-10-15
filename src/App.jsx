import Introducton from './components/introduction/Introduction';
import Tech from './components/tech/Tech';
import Articles from './components/articles/Articles';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
    return (
        <>
            <Introducton />
            <Tech />
            <Projects />
            <Articles />
            <Skills />
            <Contact />
            <Footer />
        </>
    );
}

export default App
