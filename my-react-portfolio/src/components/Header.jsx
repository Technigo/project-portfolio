import styled from "styled-components";
import { TextBlock } from "./UI-components/TextBlock";
import { TextBlockSection } from "./UI-components/TextBlock";

export const StyledH2 = styled.h2`
  color: ${(props) => (props.white ? "#ffffff" : "#000000")};
`;

const images = [
  "https://images.unsplash.com/photo-1729731322011-f945437445be?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1728815235820-3a894b2f2807?q=80&w=3240&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1728327511854-fb04fa8fb2e4?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const description =
  "Sara is an exceptional developer known for her innovative solutions and exceptional coding abilities. She creates user-friendly applications and solves complex issues with ease. Her drive for excellence makes her a valuable asset to any project and a standout in the technology field.";

export const Header = () => {
  return (
    <>
      <TextBlockSection>
        <h3>Hi There, I'm</h3>
        <StyledH2 white>Mika Eberstein</StyledH2>
        <h3>
          Full stack developer with a background in mechanical engineering &
          business operations
        </h3>
      </TextBlockSection>

      <div className="images">
        <img src={images[0]} alt="placeholder" />
        <img src={images[1]} alt="placeholder" />
        <img src={images[2]} alt="placeholder" />
      </div>
      <TextBlock title="Bio" description={description} />
    </>
  );
};
