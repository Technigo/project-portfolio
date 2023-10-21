import React from "react";
import { ArticleCard } from "./ArticleCard.jsx";
import { MainHeading } from "../Typo/MainHeading.jsx";

import "../MyWords/MyWords.css";

export const MyWords = () => {
  return (
    <>
      {/* A devider between two sections to make it pretty */}
      <div className="divider"></div>
      {/* Listing the articles */}
      <section className="mywords-section">
        <div className="mywords-section-content">
          <div className="mywords-wrapper">
            {/* Inserting components for heading and article */}
            <MainHeading className={`mywords-h2`} text={`My Words`} />
            <ArticleCard />
          </div>
        </div>
      </section>
    </>
  );
};
