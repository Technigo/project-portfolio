import { Heading } from "../ui/Heading"
import "./Bio.css"

export const Bio = () => {
  return (
    <div className="bio-card">
      <Heading heading="Bio" className="bio-heading" level={2} />
      <div className="bio-text">
        Anna is a developer with a keen eye for detail, blending technical expertise with strong design sensibilities. She creates visually appealing, user-friendly interfaces while ensuring accessibility and inclusivity for all users. Her attention to detail and focus on functionality make her a valuable asset to any project.
      </div>
    </div>
  );
};