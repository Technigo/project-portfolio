import { H1, H3 } from "../../ui/Typography/Typography"
import "./Header.css"

export const Header = () => {
  return (
    <section className="header-container">
      <div className="header-section">
        <H3 className="intro"> Hi there, I’m</H3>
        <H1 className="name">Fanny Henriques</H1>
        <H3 className="info">
          Creative Front-End Developer with a background in social science and social work
        </H3>
      </div>
    </section>
  );
};
