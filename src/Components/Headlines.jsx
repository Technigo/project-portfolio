/* eslint-disable react/prop-types */
import "/src/Components/headlines.css";

export const Headlines = ({ title }) => {
  return (
    <div>
      <h1 className="title">{title}</h1>
    </div>
  );
};

export default Headlines;
