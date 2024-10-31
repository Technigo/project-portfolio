import styled from "styled-components";
import { Pill } from "./UI-components/Pill";
import { LinkButton } from "./UI-components/LinkButton";
import websiteIcon from "../assets/ic-web-white.svg";
import { SharedLayout } from "./UI-components/SharedStyles";

const ArticleInfo = styled.div`
  display: flex;
  width: 580px;
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

const ArticleText = styled.div`
  align-self: stretch;
  text-align: left;
  max-width: 580px;

  @media (max-width: 768px) {
    text-align: left;
    max-width: 350px;
  }
`;

export const Articles = ({ src, title, description }) => {
  return (
    <SharedLayout dark imageHeight="311px">
      <img src={src} alt={title} />
      <ArticleInfo>
        <Pill color="#ffffff">July 14th</Pill>
        <ArticleText>
          <h3>{title}</h3>
          <p>{description}</p>
        </ArticleText>
        <LinkButton
          backgroundColor="#ffffff"
          color="#000000"
          icon={websiteIcon}
          text="Read Article"
          href=""
        />
      </ArticleInfo>
    </SharedLayout>
  );
};
