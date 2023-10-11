import { Section } from "./Sections/Section";
import { Headline } from "./Sections/Headline.jsx"; // Import the Headline component
import "./App.css";

export const App = () => {
  return (
    <>
      <div className="main-container">
        <Headline text="Featured Projects" level={1} />{" "}
        {/* Use the Headline component */}
        <Section />
      </div>
    </>
  );
};

export default App;
