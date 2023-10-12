import Headlines from "../Components/Headlines";
import Profile from "../Components/Profile";
import "/src/index.css";

export const Introduction = () => {
  return (
    <div>
      <h1>Hi, I'm Janice</h1>
      <Headlines title="Frontend Developer" />
      <div className="intro">
        <p>A self-initiative team worker and ready for further challenges.</p>
      </div>
      <Profile source="/src/assets/closeup-young-female-professional-making-eye-contact-against-colored-background_662251-651.avif" />
    </div>
  );
};
export default Introduction;
