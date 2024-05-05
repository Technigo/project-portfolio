import { Headline } from "./Headline/Headline";
import { List } from "./List/List";
import "./List/List.css";

export const SkillList = ({ skillDiv, skillTitle, skills }) => {
  return (
    <div className={skillDiv}>
      <Headline headlineStyle={"skills-headline"} headline={skillTitle} />
      <List listStyle="skill-list" listItems={skills} />
    </div>
  );
};
