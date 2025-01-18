import styled from "styled-components";

export const SharedLayout = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin: 0 auto;
  background-color: ${(props) => (props.dark ? "black" : "white")};
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};

  > img {
    width: 479px;
    height: ${(props) => props.imageHeight || "479px"};
    border-radius: 12px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 32px;
    box-sizing: border-box;

    > img {
      width: 100%;
      height: 479px;
    }
  }
`;

export const ProjectLayout = styled(SharedLayout)`
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
  }
`;
