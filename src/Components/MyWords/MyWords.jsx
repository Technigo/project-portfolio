import React from "react";
import { ArticleCard } from "./ArticleCard.jsx";
import { MainHeading } from "../Typo/MainHeading.jsx";

import "../MyWords/MyWords.css";

export const MyWords = () => {
  return (
    <section className="mywords-section">
      <div className="mywords-section-content">
        <div className="mywords-wrapper">
          <MainHeading className={`mywords-h2`} text={`My Words`} />
          <ArticleCard />
        </div>
      </div>
    </section>
  );
};
