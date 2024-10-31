import styled from "styled-components";
import githubIcon from "../assets/ic-github.svg";
import websiteIcon from "../assets/ic-web-white.svg";
import { Pill } from "./UI-components/Pill";
import { LinkButton } from "./UI-components/LinkButton";
import { SharedLayout } from "./UI-components/SharedStyles";

const ProjectInfo = styled.div`
  display: flex;
  max-width: 580px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    width: 100%;
    > img {
      width: 100%;
    }
  }
`;

const ProjectText = styled.div`
  align-self: stretch;
  text-align: left;
  max-width: 580px;
  margin: 24px 0;

  @media (max-width: 1025px) {
    text-align: left;
    width: 100%;
  }
  @media (max-width: 768px) {
    max-width: 350px;
  }
`;

const LanguageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

export const Projects = ({ src, title, description, leftAligned }) => {
  const Languages = ({ languages }) => {
    return (
      <LanguageContainer>
        {languages.map((language) => (
          <Pill key={language} color="#000">
            {language}
          </Pill>
        ))}
      </LanguageContainer>
    );
  };

  return (
    <SharedLayout reverse={leftAligned}>
      <img src={src} alt={title} />
      <ProjectInfo>
        <Languages languages={["Node", "HTML5", "CSS", "React"]} />
        <ProjectText>
          <h3>{title}</h3>
          <p>{description}</p>
        </ProjectText>
        <LinkButton
          backgroundColor="#000000"
          color="#ffffff"
          icon={githubIcon}
          text="Source Code"
          href=""
        />
        <LinkButton
          backgroundColor="#000000"
          color="#ffffff"
          icon={websiteIcon}
          text="Live Demo"
          href=""
        />
      </ProjectInfo>
    </SharedLayout>
  );
};
