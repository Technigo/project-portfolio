import "../index.css";

export const Photo = ({ mode, color, source }) => {
  console.log(source);
  return <img src={source} className={`photo ${color} ${mode}`} />;
};
