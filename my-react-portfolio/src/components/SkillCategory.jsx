export const SkillCategory = ({ skillSet }) => {
  return (
    <>
      <h1 style={{ backgroundColor: skillSet.backGroundColor }}>
        {skillSet.title}
      </h1>
      <ul>
        {skillSet.items.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </>
  );
};
