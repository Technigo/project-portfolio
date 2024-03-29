

export const Tags = ({ tags }) => {
  return (
    <div className="tags">
      {tags.map((tag) => {
        return <div className="individual-tag">{tag.toUpperCase()}</div>;
      })}
    </div>
  );
};
