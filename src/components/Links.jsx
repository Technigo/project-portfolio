import LinkButton from "./LinkButton";

export const Links = ({ buttons }) => {
  return (
    <div>
      {buttons.map((button, index) => (
        <LinkButton
          key={index}
          buttonText={button.text}
          url={button.url}
          icon={button.icon}
        />
      ))}
    </div>
  );
};
