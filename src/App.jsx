import { TopSection } from "./components/top-section/TopSection";
import { TechSection } from "./components/tech-section/TechSection";
import { Project } from "./components/project/Project";
import { Articles } from "./components/articles/Articles";
import { Skills } from "./components/skills/Skills";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";

function App() {


  return (
    <>

      < TopSection />
      < TechSection />
      < Project />
      {/* < Articles /> */}
      < Skills />
      < Contact />
      < Footer />

    </>
  )
}

export default App;

