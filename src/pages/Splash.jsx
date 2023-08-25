import React from "react";
import styled from "styled-components";

const StyledSection = styled.section``;

const StyledHeroPicture = styled.div`
  display: none;
`;

const StyledTitleSection = styled.div`
  justify-content: center;
`;

const StyledTitleCard = styled.div`
  padding-bottom: 40px;
  padding-top: 55px;
  margin: 0 24px;
`;

const StyledTitleCardPicture = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 29px;
`;

const StyledTitleCardTitles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledTextContainer = styled.div`
  padding-bottom: 48px;
  margin: 0 24px;
`;

const StyledText = styled.p``;

const StyledNavIcons = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  height: 32px;
  margin: 0 24px;
`;

const StyledScroll = styled.div`
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 138px;
  height: 138px;
  margin: 0 auto;
  padding-bottom: 55px;
`;

const StyledScrollIcon = styled.svg`
  align-self: center;
`;

const StyledScrollText = styled.div`
  font-family: "SatoshiBlack";
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 22px;
  text-decoration: underline solid #0b24f5 3px;
  text-underline-offset: 4px;
  color: #0b24f5;
`;

export default function Splash() {
  return (
    <StyledSection>
      <StyledHeroPicture>
        <img
          src="./public/assets/hero.webp"
          alt="Photograph of an European robin (Erithacus rubecula) sitting on a hazel branch"
        />
      </StyledHeroPicture>
      <StyledTitleSection>
        <StyledTitleCard>
          <StyledTitleCardPicture>
            <img src="./assets/profile.webp" alt="Edvard Ekström" />
          </StyledTitleCardPicture>
          <StyledTitleCardTitles>
            <h1>Edvard Ekström</h1>
            <h2>Frontend developer</h2>
            <h3>& grammar nerd</h3>
          </StyledTitleCardTitles>
        </StyledTitleCard>
        <StyledTextContainer>
          <StyledText>
            Edvard is an exceptional developer known for his innovative
            solutions and exceptional coding abilities. He creates user-friendly
            applications and solves complex issues with ease. His drive for
            excellence makes him a valuable asset to any project and a standout
            in the technology field.
          </StyledText>
        </StyledTextContainer>
        <StyledNavIcons>
          <a href="https://www.linkedin.com/in/edvard-ekstr%C3%B6m-068aa7268/">
            <i class="fa-brands fa-linkedin fa-2xl"></i>
            <p class="sr-hidden">Link to LinkedIn</p>
          </a>

          <a href="https://github.com/edv-rd/">
            <i class="fa-brands fa-github fa-2xl"></i>
            <p class="sr-hidden">Link to GitHub</p>
          </a>

          <a href="https://stackoverflowteams.com/c/technigo/users/419/">
            <i class="fa-brands fa-stack-overflow fa-2xl"></i>
            <p class="sr-hidden">Link to Stack-Overflow</p>
          </a>
        </StyledNavIcons>
        <StyledScroll>
          <StyledScrollIcon
            width="23"
            height="34"
            viewBox="0 0 23 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 22.5L11.5 32M11.5 32L2 22.5M11.5 32L11.5 2"
              stroke="#0B24F5"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </StyledScrollIcon>
          <StyledScrollText>Lets scroll</StyledScrollText>
        </StyledScroll>
      </StyledTitleSection>
    </StyledSection>
  );
}
