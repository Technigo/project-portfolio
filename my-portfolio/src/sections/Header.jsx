import './Header.css'; // Make sure to create this CSS file if you haven't already

export const Header = () => {
  console.log("header");
  return (
    <header className="header">
      <h1>
        <span className="welcome">Hi there, I’m</span>
      </h1>
      <h1 className="name">Anna Hansen</h1>
      <h3 className="intro-text">
        Creative Front-End Developer with a background in Finance and Sales Administration
      </h3>
    </header>
  );
};