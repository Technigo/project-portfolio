import "./List.css";

export const List = ({ listStyle, listItems }) => {
  return (
    <ul className={listStyle}>
      {listItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};
