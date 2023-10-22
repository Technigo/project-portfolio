import Headlines from "../Components/Headlines";
import Profile from "../Components/Profile";
import "/src/index.css";

export const Introduction = () => {
  return (
    <div className="intro-wrapper">
      <h1>Hi, I'm Janice</h1>
      <Headlines title="Frontend Developer" />
      <div className="intro">
        <Profile />
        <p>A self-initiative team worker and ready for further challenges.</p>
      </div>
    </div>
  );
};
export default Introduction;
