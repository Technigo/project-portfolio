import React from "react";

const FeaturedThoughtsCard = ({ thought }) => {
  return (
    <article>
      <a href={thought.live_href} target="_blank" rel="noreferrer">
        <img
          alt={thought.img_alt}
          className="article-image"
          src={require("../assets/" + thought.image_name)}
        />
        <h3 className="color-font article-date fs-normal fw-normal">
          {thought.month}
        </h3>
        <h3 className="article-heading fs-normal fw-bold">{thought.name}</h3>
        <p className="fs-normal fw-normal">
          {thought.short_description}{" "}
          <span className="fw-bold color-font" aria-hidden="true">
            &#62;&#62;
          </span>
        </p>
      </a>
    </article>
  );
};

export default FeaturedThoughtsCard;
