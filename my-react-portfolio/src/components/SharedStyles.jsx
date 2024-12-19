import styled from "styled-components";

export const SharedLayout = styled.div`
  display: flex;
  align-items: center;
  width: 1184px;
  justify-content: space-between;
  margin: 0 auto;
  background-color: ${(props) => (props.dark ? "black" : "white")};
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};

  > img {
    width: 479px;
    height: ${(props) => props.imageHeight || "479px"};
    border-radius: 12px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
    max-width: 768px;
    padding: 0 24px;
    gap: 32px;
    box-sizing: border-box;

    > img {
      width: 100%;
      height: auto;
    }
  }
`;
