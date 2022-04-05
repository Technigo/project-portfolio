import React from "react";
import { Container } from "../components-styled/Container";
import FeaturedThoughtsCard from "../components/FeaturedThoughtsCard";
import thoughts from "../data/thoughts.json";

//Filtering Thoughts
const featuredThoughts = thoughts
  .filter((thought) => thought.featured === true)
  .reverse();

const Thoughts = () => {
  return (
    <section>
      <Container>
        <h2 className="section-heading fw-bold montserrat">
          <span className="heading-block">
            MY THOUGHTS <span className="mobile-hidden-text">ABOUT CODE</span>
          </span>
        </h2>
        <div className="featured-opinions roboto">
          {featuredThoughts.map((thought) => {
            return (
              <React.Fragment key={thought.id}>
                <FeaturedThoughtsCard thought={thought} />
              </React.Fragment>
            );
          })}
        </div>
        {/* <h2 className="section-heading montserrat fw-bold color-font">
          MORE THOUGHTS
        </h2>
        <div className="other-opinions roboto">
          <div>
            <a href="www.google.com" target="_blank" rel="noreferrer">
              <p>
                <span className="color-font underline">MAR 2022.</span>
                <span className="underline fw-bold">
                  {" "}
                  5 ovens that will make pizza easier.
                </span>
                <span
                  className="color-font underline fw-bold"
                  aria-hidden="true"
                >
                  {" "}
                  &#62;&#62;
                </span>
              </p>
            </a>
          </div>
          <div>
            <a href="www.google.com" target="_blank" rel="noreferrer">
              <p>
                <span className="color-font underline">MAR 2022.</span>
                <span className="underline fw-bold">
                  {" "}
                  5 ovens that will make pizza easier.
                </span>
                <span
                  className="color-font underline fw-bold"
                  aria-hidden="true"
                >
                  {" "}
                  &#62;&#62;
                </span>
              </p>
            </a>
          </div>
          <div>
            <a href="www.google.com" target="_blank" rel="noreferrer">
              <p>
                <span className="color-font underline">MAR 2022.</span>
                <span className="underline fw-bold">
                  {" "}
                  5 ovens that will make pizza easier.
                </span>
                <span
                  className="color-font underline fw-bold"
                  aria-hidden="true"
                >
                  {" "}
                  &#62;&#62;
                </span>
              </p>
            </a>
          </div>
        </div> */}
      </Container>
    </section>
  );
};

export default Thoughts;
