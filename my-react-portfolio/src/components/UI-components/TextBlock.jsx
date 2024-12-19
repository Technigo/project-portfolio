import styled from "styled-components";
import { StyledH2 } from "../Header";

export const TextBlockSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 800px;
  gap: 64px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0px 48px;
    gap: 16px;
    p {
      margin: 0px 24px;
    }
  }
`;

export const TextBlock = ({ title, description }) => {
  return (
    <TextBlockSection>
      <StyledH2 white={true}>{title}</StyledH2>
      <p>{description}</p>
    </TextBlockSection>
  );
};
