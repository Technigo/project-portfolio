import "./Intro.css";
//import { Headline } from "./Headline";

export const Intro = () => {
  return (
    <div className="intro-container">
      <img src="/src/assets/jag1.png" alt="Image" className="centered"></img>
      <h2>Hi, I'm Frida Lindskog</h2>
      <h1>Frontend Developer</h1>
      <p>
        some text bla vla bla bla bla bla bla bla blsome text bla vla bla bla
        bla bla bla bla bsome text bla vla bla bla bla bla bla bla bsome text
        bla vla bla bla bla bla bla bla b
      </p>
      <img
        src="/src/assets/Position=down.png"
        alt="arrowicon"
        className="arrow-icon"
      ></img>
    </div>
  );
};

{
  /* <Headline text="Hi, I'm Frida Lindskog" level={2} className="intro-h2" />
      <Headline text="Frontend Developer" level={1} className="intro-h1" /> */
}
