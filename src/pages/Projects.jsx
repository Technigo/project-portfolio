import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 64px;
  padding-bottom: 55px;

  h1 {
    font-family: "Satoshi";
    font-style: normal;
    font-weight: 700;
    font-size: 72px;
    line-height: 80px;
    color: #0b24f5;
    margin: 0 24px;
  }
`;

const StyledFeaturedProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  margin: 24px;
`;

const StyledProject = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledProjectImage = styled.div`
  img {
    width: 327px;
    height: 280px;
    object-fit: cover;
  }
`;

const StyledProjectText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  h2 {
    font-family: "Satoshi";
    font-style: normal;
    font-weight: 900;
    font-size: 32px;
    line-height: 43px;
    color: #000000;
  }

  p {
    font-family: "EB Garamond";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 29px;
    color: #000000;
  }
`;

const StyledProjectTagsAndLinks = styled.div``;

const StyledProjectTags = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
`;

const StyledProjectTag = styled.div`
  padding: 2px 6px;
  background-color: #000000;

  span {
    font-family: "Satoshi";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #fff;
  }
  p {
    font-family: "Satoshi";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    color: #333333;
  }
`;

const StyledProjectLinkButtons = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 24px;

  p:hover {
    color: #fff;
  }

  p:focus {
    color: #fff;
  }

  i {
    color: #333333;
    padding: 10px;
  }

  i:hover {
    color: #fff;
  }

  i:focus {
    color: #fff;
  }

  a {
    cursor: pointer;
  }
`;

const StyledProjectLinkButtonView = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  border-radius: 40px;
  padding: 0px 16px 0px 0px;
  height: 48px;
  width: 200px;

  :hover {
    background: #eb5577;
  }

  :hover p {
    color: #fff;
  }

  :hover i {
    color: #fff;
  }

  :focus p {
    color: #fff;
  }

  :focus i {
    color: #fff;
    background: #eb5577;
  }
`;

const StyledProjectLinkButtonDemo = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  border-radius: 40px;
  padding: 0px 16px 0px 0px;
  height: 48px;
  width: 164px;

  :hover {
    background-color: #0b24f5;
  }

  :hover p {
    color: #fff;
  }

  :hover i {
    color: #fff;
  }

  :focus {
    background-color: #0b24f5;
  }

  :focus p {
    color: #fff;
  }

  :focus i {
    color: #fff;
  }
`;

export default function Projects() {
  return (
    <StyledSection>
      <h1>Featured Projects</h1>
      <StyledFeaturedProjects>
        <StyledProject>
          <StyledProjectImage>
            <img
              src="./assets/weather_app.webp"
              alt="satellite photo of a cyclone"
            />
          </StyledProjectImage>
          <StyledProjectText>
            <h2>Weather App built in Javascript</h2>
            <p>
              The chat bot app is a conversational AI-powered tool designed to
              enhance user experience by providing instant, personalized, and
              automated responses to user inquiries.
            </p>
            <StyledProjectTagsAndLinks>
              <StyledProjectTags>
                <StyledProjectTag>
                  <span>HTML5</span>
                </StyledProjectTag>
                <StyledProjectTag>
                  <span>CSS</span>
                </StyledProjectTag>
                <StyledProjectTag>
                  <span>Javascript</span>
                </StyledProjectTag>
                <StyledProjectTag>
                  <span>API:s</span>
                </StyledProjectTag>
              </StyledProjectTags>
            </StyledProjectTagsAndLinks>
            <StyledProjectLinkButtons>
              <StyledProjectLinkButtonView href="https://github.com/edv-rd/project-weather-app">
                <i className="fa-brands fa-github fa-xl"></i>
                <p>View the code</p>
              </StyledProjectLinkButtonView>
              <StyledProjectLinkButtonDemo href="https://kaleidoscopic-tarsier-64d42d.netlify.app/#">
                <i className="fa-solid fa-globe fa-xl"></i>
                <p>Live demo</p>
              </StyledProjectLinkButtonDemo>
            </StyledProjectLinkButtons>
          </StyledProjectText>
        </StyledProject>
      </StyledFeaturedProjects>
    </StyledSection>
  );
}
