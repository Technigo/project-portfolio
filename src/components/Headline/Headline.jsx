import "./Headline.css";

export const Headline = ({ headlineStyle, headline }) => {
  return (
    <h1 className={headlineStyle}>
      {headline}
    </h1>
  );
};
