import { PropTypes } from "prop-types";

export const Headline = ({ title, style }) => {
  return <h1 className={style}>{title}</h1>;
};

Headline.propTypes = {
  title: PropTypes.string,
  style: PropTypes.string,
};
