import React from "react";
import { Heading1 } from "../Heading1/Heading1";
import { Button } from "../Button/Button";

import "./MyWords.css";

export const MyWords = () => {
  return (
    <section className="mywords-container">
      <div>
        <Heading1 className={"my-wordsh1"} text={"My words"} />
      </div>
      <article className="article-wrapper">
        <div className="single-article">
          <img
            src="src/assets/article-image1.jpg"
            alt="Two people coding together."
          />
          <div className="date-heading">
            <div className="tag">July 2023</div>
            <h2>How to stop being scared: Learning to love code</h2>
          </div>
          <p>
            Writing code is less about “just working”. Instead, it’s much more
            about creativity. It’s similar to creative writing in that the
            author architecting a story must use an assortment of tools and
            components (i.e., content) in a way to satisfy a particular
            objective.
          </p>
          <Button
            className={`read-article`}
            link={"https://in.pinterest.com/pin/612630355540252288/"}
            icon={`src/assets/btn-article-default.svg`}
            iconAlt={`Article logo`}
            buttonName={`Read article`}
          />
        </div>
      </article>
      <article className="article-wrapper">
        <div className="single-article">
          <img
            src="src/assets/article-image2.jpg"
            alt="Two people coding together."
          />
          <div className="date-heading">
            <div className="tag">July 2023</div>
            <h2>How to stop being scared: Learning to love code</h2>
          </div>
          <p>
            Writing code is less about “just working”. Instead, it’s much more
            about creativity. It’s similar to creative writing in that the
            author architecting a story must use an assortment of tools and
            components (i.e., content) in a way to satisfy a particular
            objective.
          </p>
          <Button
            className={`read-article`}
            link={"https://in.pinterest.com/pin/612630355540252288/"}
            icon={`src/assets/btn-article-default.svg`}
            iconAlt={`Article logo`}
            buttonName={`Read article`}
          />
        </div>
      </article>
      <article className="article-wrapper">
        <div className="single-article">
          <img
            src="src/assets/article-image3.jpg"
            alt="Two people coding together."
          />
          <div className="date-heading">
            <div className="tag">July 2023</div>
            <h2>How to stop being scared: Learning to love code</h2>
          </div>
          <p>
            Writing code is less about “just working”. Instead, it’s much more
            about creativity. It’s similar to creative writing in that the
            author architecting a story must use an assortment of tools and
            components (i.e., content) in a way to satisfy a particular
            objective.
          </p>
          <Button
            className={`read-article`}
            link={"https://in.pinterest.com/pin/612630355540252288/"}
            icon={`src/assets/btn-article-default.svg`}
            iconAlt={`Article logo`}
            buttonName={`Read article`}
          />
        </div>
      </article>
      <article className="article-wrapper">
        <div className="single-article">
          <img
            src="src/assets/article-image4.jpg"
            alt="Two people coding together."
          />
          <div className="date-heading">
            <div className="tag">July 2023</div>
            <h2>How to stop being scared: Learning to love code</h2>
          </div>
          <p>
            Writing code is less about “just working”. Instead, it’s much more
            about creativity. It’s similar to creative writing in that the
            author architecting a story must use an assortment of tools and
            components (i.e., content) in a way to satisfy a particular
            objective.
          </p>
          <Button
            className={`read-article`}
            link={"https://in.pinterest.com/pin/612630355540252288/"}
            icon={`src/assets/btn-article-default.svg`}
            iconAlt={`Article logo`}
            buttonName={`Read article`}
          />
        </div>
      </article>
    </section>
  );
};
