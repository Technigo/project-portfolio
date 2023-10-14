import { Section } from "./Sections/Section";
import { Footer } from "./Sections/Footer";

import "./App.css";

export const App = () => {
  return (
    <>
      <div className="main-container">
        <Section />
        <Footer />
      </div>
    </>
  );
};

export default App;
