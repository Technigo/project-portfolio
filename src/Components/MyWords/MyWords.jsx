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
          <img src="/article-image1.jpg" alt="Two people coding together." />
          <div className="date-heading">
            <div className="tag">July 2023</div>
            <h2>How to stop being scared: Learning to love code</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Button
            className={`read-article`}
            link={
              "https://in.pinterest.com/pin/data-science--942800503220719912/"
            }
            icon={`/btn-article-default.svg`}
            iconAlt={`Article logo`}
            buttonName={`Read article`}
          />
        </div>
        <div className="single-article">
          <img
            src="/article-image2.jpg"
            alt="Overview over a table with several computers and snacks."
          />
          <div className="date-heading">
            <div className="tag">July 2023</div>
            <h2>How to stop being scared: Learning to love code</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Button
            className={`read-article`}
            link={"https://in.pinterest.com/pin/612630355540252288/"}
            icon={`/btn-article-default.svg`}
            iconAlt={`Article logo`}
            buttonName={`Read article`}
          />
        </div>

        <div className="single-article">
          <img
            src="/article-image3.jpg"
            alt="Image of a computer screen showing some code."
          />
          <div className="date-heading">
            <div className="tag">July 2023</div>
            <h2>How to stop being scared: Learning to love code</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Button
            className={`read-article`}
            link={
              "https://in.pinterest.com/pin/data-science--942800503220719912/"
            }
            icon={`/btn-article-default.svg`}
            iconAlt={`Article logo`}
            buttonName={`Read article`}
          />
        </div>

        <div className="single-article">
          <img
            src="/article-image4.jpg"
            alt="Three people coding together and enjoying themselves."
          />
          <div className="date-heading">
            <div className="tag">July 2023</div>
            <h2>How to stop being scared: Learning to love code</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Button
            className={`read-article`}
            link={"https://in.pinterest.com/pin/612630355540252288/"}
            icon={`/btn-article-default.svg`}
            iconAlt={`Article logo`}
            buttonName={`Read article`}
          />
        </div>
      </article>
    </section>
  );
};
