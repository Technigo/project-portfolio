import styled from "styled-components";

export const SharedLayout = styled.div`
  display: flex;
  align-items: center;
  width: 1184px;
  align-self: stretch;
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

    > img {
      width: 100%;
    }
  }
`;
