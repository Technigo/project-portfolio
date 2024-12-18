import Header from "./Header";
import Img from "./Img";
import Bio from "./Bio";
import "./Introduction.css";

const Introduction = () => {
  return (
    <div className="introduction-container">
      <Header />
      <Img />
      <Bio />
    </div>
  );
}

export default Introduction;
