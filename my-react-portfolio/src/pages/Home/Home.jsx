import React from "react";
import { Header } from "../../Components/Header/Header";
import { FeaturedProjects } from "../../Components/FeaturedProjects/FeaturedProjects";
import { MyWords } from "../../Components/MyWords/MyWords";
import { Skills } from "../../Components/Skills/Skills";
import { LetsTalk } from "../../Components/LetsTalk/LetsTalk";
import { Footer } from "../../Components/Footer/Footer";
import { RedArrow } from "../../Components/RedArrow/RedArrow";

import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div>
      <Header />
      <RedArrow />
      <FeaturedProjects />
      <MyWords />
      <Skills />
      <LetsTalk />
      <Footer />
    </div>
  );
};
