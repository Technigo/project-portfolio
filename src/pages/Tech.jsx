import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  background-color: #edffff;
  padding-top: 80px;
  padding-bottom: 120px;
  align-content: center;
  justify-content: center;

  h1 {
    font-family: "Satoshi";
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    line-height: 108px;
    color: #0b24f5;
    padding-bottom: 60px;
  }

  p {
    font-family: "EB Garamond";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 32px;
  }

  span.red {
    background-color: #eb5577;
    color: white;
  }

  span.dark-blue {
    background-color: #0b24f5;
    color: white;
  }

  span.light-blue {
    background-color: #2483e0;
    color: white;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 24px;
`;

const StyledTextDiv = styled.div``;

export default function Tech() {
  return (
    <StyledSection>
      <StyledContainer>
        <h1>Tech</h1>
        <StyledTextDiv>
          <p>
            HTML, CSS, Flexbox, <span className="red">Javascript,</span> ES6,
            JSX,
            <span className="dark-blue">React,</span> React Hooks, Redux,
            Node.js, Mongo DB, Web Accessibility, API:s,
            <span className="light-blue">mob-programming,</span>{" "}
            pair-programming, Github.
          </p>
        </StyledTextDiv>
      </StyledContainer>
    </StyledSection>
  );
}
