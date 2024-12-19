import styled from "styled-components";
import { Pill } from "./UI-components/Pill";

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  padding: 64px 0;

  @media (max-width: 768px) {
    gap: 0px;

    h2 {
      font-size: 80px;
    }
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  width: 100%;
  max-width: 1184px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StyledPill = styled(Pill)`
  margin-bottom: 12px;
`;

const SkillColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const skillsData = {
  Code: [
    "HTML5",
    "CSS3",
    "Javascript ES6",
    "React",
    "Styled Components",
    "GitHub",
  ],
  Toolbox: [
    "Atom",
    "Postman",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Figma",
    "Keynote",
    "Slack",
  ],
  Upcoming: ["Node.js"],
  More: [
    "Branding",
    "Strategy",
    "Process Design",
    "Concept",
    "Development",
    "Agile methodology",
  ],
};

export const Skills = () => {
  return (
    <SkillsWrapper>
      <h2>Skills</h2>
      <SkillsGrid>
        {Object.entries(skillsData).map(([category, skills]) => (
          <SkillColumn key={category}>
            <StyledPill color="#000">{category}</StyledPill>
            {skills.map((skill) => (
              <p key={skill}>{skill}</p>
            ))}
          </SkillColumn>
        ))}
      </SkillsGrid>
    </SkillsWrapper>
  );
};
