import React from "react";
import { TechSection } from "../TechSection/TechSection";
import { FeaturedProjects } from "../FeaturedProjects/FeaturedProjects";
import { MyWords } from "../MyWords/MyWords";
import { Skills } from "../Skills/Skills";
import { LetsTalk } from "../LetsTalk/LetsTalk";
import { Footer } from "../Footer/Footer";

import "./DisplayInformation.module.css";

export const DisplayInformation = () => {
  return (
    <div className="">
      <TechSection />
      <FeaturedProjects />
      <MyWords />
      <Skills />
      <LetsTalk />
      <Footer />
    </div>
  );
};
