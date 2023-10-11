import { Headline } from "./Headline";
import "./Section.css";

export const Section = () => {
  return (
    <>
      <Headline text="Featured Projects" level={1} />
      <div className="projectGrid">
        <div className="projectCard">
          <p>Group number 2 is making Project Card. We just adjusted the css</p>
        </div>
        <div className="projectCard">
          <p>Group number 2 is making Project Card. We just adjusted the css</p>
        </div>
        <div className="projectCard">
          <p>Group number 2 is making Project Card. We just adjusted the css</p>
        </div>
      </div>
    </>
  );
};
