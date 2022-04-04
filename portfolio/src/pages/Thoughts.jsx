import React from "react";
import { Container } from "../components-styled/Container";

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
          <article className="article">
            <a href="www.google.com" target="_blank" rel="noreferrer">
              <img
                alt="Cover of Macbook Pro with V S  Code open."
                className="article-image"
                src="./assets/arnold-francisca-unsplash.jpg"
              />
              <h3 className="color-font article-date fs-normal fw-normal">
                MAR 2022
              </h3>
              <h3 className="article-heading fs-normal fw-bold">
                How to stop being pizza: <br className="desktop-hidden" />
                Pizza to love pizza
              </h3>
              <p className="fs-normal fw-normal">
                Making pizza is more than &quot;just cheesy bread&quot;.
                Instead, it&apos;s much more about oven. It&apos;s similar to
                pie in that the oven is heating an assortment of ingredients and
                components (i.e., food) in a way to satisfy a particular
                appetite.{" "}
                <span className="fw-bold color-font" aria-hidden="true">
                  &#62;&#62;
                </span>
              </p>
            </a>
          </article>
          <article className="article mobile-hidden">
            <a href="www.google.com" target="_blank" rel="noreferrer">
              <img
                alt="Cover of lightbulb being held up against sky."
                className="article-image"
                src="./assets/diego-ph-unsplash.jpg"
              />
              <h3 className="color-font article-date fs-normal fw-normal">
                MAR 2022
              </h3>
              <h3 className="article-heading fs-normal fw-bold">
                How to stop being pizza: <br className="desktop-hidden" />
                Pizza to love pizza
              </h3>
              <p className="fs-normal fw-normal">
                Making pizza is more than &quot;just cheesy bread&quot;.
                Instead, it&apos;s much more about oven. It&apos;s similar to
                pie in that the oven is heating an assortment of ingredients and
                components (i.e., food) in a way to satisfy a particular
                appetite.{" "}
                <span className="fw-bold color-font" aria-hidden="true">
                  &#62;&#62;
                </span>
              </p>
            </a>
          </article>
        </div>
        <h2 className="section-heading montserrat fw-bold color-font">
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
        </div>
      </Container>
    </section>
  );
};

export default Thoughts;
