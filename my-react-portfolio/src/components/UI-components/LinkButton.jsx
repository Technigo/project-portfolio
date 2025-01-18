import styled from "styled-components";

export const LinkButtonWrapper = styled.a`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  text-decoration: none;
  display: flex;
  max-width: 303px;
  height: 48px;
  padding: 0px 16px;
  align-items: center;
  gap: 16px;
  border-radius: 12px;
  align-self: stretch;
  white-space: nowrap;
  border: 1px solid ${(props) => props.borderColor};

  &:hover {
    transform: scale(1.03);
  }
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  filter: ${(props) => (props.color === "#ffffff" ? "none" : "invert(1)")};
`;

export const LinkButton = ({
  icon,
  text,
  href,
  backgroundColor,
  color,
  borderColor,
}) => {
  return (
    <LinkButtonWrapper
      href={href}
      backgroundColor={backgroundColor}
      color={color}
      borderColor={borderColor}
    >
      <Icon src={icon} alt={text} color={color} />
      {text}
    </LinkButtonWrapper>
  );
};
