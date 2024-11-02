import { H2 } from "../ui/Heading";
import "./Bio.css";

export const Bio = () => {
  return (
    <div className="bio-card">
      <H2 heading="Bio" className="bio-heading" />
      <div className="bio-text">
        Anna is an exceptional developer known for her innovative solutions and exceptional coding abilities. She creates user-friendly applications and solves complex issues with ease. Her drive for excellence makes her a valuable asset to any project and a standout in the technology field.
      </div>
    </div>
  );
};