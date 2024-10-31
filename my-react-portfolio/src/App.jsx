import "./App.css";
import { Header } from "./components/Header";
import { Articles } from "./components/Articles";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import styled from "styled-components";
import { LinkButton } from "./components/UI-components/LinkButton";
import arrow from "./assets/ic-arrowdown.svg";
import { TextBlock } from "./components/UI-components/TextBlock";
import { Skills } from "./components/Skills";

const SectionWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 128px 0;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => (props.tight ? "64px" : "128px")};
  background-color: ${(props) => (props.dark ? "#000000" : "#ffffff")};
  color: ${(props) => (props.dark ? "#ffffff" : "#000000")};

  @media (max-width: 768px) {
    padding: 128px 24px;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 64px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ArticleData = [
  {
    title: "How to stop being scared: Learning to love code",
    description:
      "The chat bot app is a conversational AI-powered tool designed to enhance user experience by providing instant, personalized, and automated responses to user inquiries.",
    src: "https://images.unsplash.com/photo-1729731322011-f945437445be?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "How to stop being scared: Learning to love code",
    description:
      "The chat bot app is a conversational AI-powered tool designed to enhance user experience by providing instant, personalized, and automated responses to user inquiries.",
    src: "https://images.unsplash.com/photo-1729731322011-f945437445be?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "How to stop being scared: Learning to love code",
    description:
      "The chat bot app is a conversational AI-powered tool designed to enhance user experience by providing instant, personalized, and automated responses to user inquiries.",
    src: "https://images.unsplash.com/photo-1729731322011-f945437445be?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const ProjectData = [
  {
    title: "Chatbot built in javascript",
    description:
      "The chat bot app is a conversational AI-powered tool designed to enhance user experience by providing instant, personalized, and automated responses to user inquiries.",
    src: "https://images.unsplash.com/photo-1729731322011-f945437445be?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Chatbot built in javascript",
    description:
      "The chat bot app is a conversational AI-powered tool designed to enhance user experience by providing instant, personalized, and automated responses to user inquiries.",
    src: "https://images.unsplash.com/photo-1729731322011-f945437445be?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Chatbot built in javascript",
    description:
      "The chat bot app is a conversational AI-powered tool designed to enhance user experience by providing instant, personalized, and automated responses to user inquiries.",
    src: "https://images.unsplash.com/photo-1729731322011-f945437445be?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const App = () => {
  return (
    <>
      <SectionWrapper dark tight>
        <Header />
      </SectionWrapper>
      <SectionWrapper>
        <h2>Featured Projects</h2>
        {ProjectData.map((project, index) => (
          <Projects
            src={project.src}
            title={project.title}
            description={project.description}
            key={project.title}
            leftAligned={index % 2 === 0}
          />
        ))}
        <ButtonWrapper>
          <LinkButton
            color="#000000"
            text="See More Projects"
            href=""
            icon={arrow}
            borderColor="#000000"
          />
        </ButtonWrapper>
      </SectionWrapper>
      <SectionWrapper dark>
        <TextBlock
          title="Tech"
          description="HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Node.js, Mongo DB, Web Accessibility, APIs, mob-programming, pair-programming, GitHub."
        />
      </SectionWrapper>
      <SectionWrapper>
        <Skills />
      </SectionWrapper>
      <SectionWrapper dark>
        <h2>My Words</h2>
        {ArticleData.map((article) => (
          <Articles
            title={article.title}
            description={article.description}
            src={article.src}
            key={article.title}
          />
        ))}
        <ButtonWrapper>
          <LinkButton
            color="#ffffff"
            text="See More Articles"
            href=""
            icon={arrow}
            borderColor="#ffffff"
          />
        </ButtonWrapper>
      </SectionWrapper>
      <SectionWrapper>
        <Footer />
      </SectionWrapper>
    </>
  );
};

export default App;
