import styled from "styled-components";

export const Pill = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid ${(props) => props.color || "#000"};
  background: rgba(0, 0, 0, 0);
  width: 140px;
  color: ${(props) => props.color || "#000"};
  font-weight: 500;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (max-width: 768px) {
    width: 76px;
    margin-top: 8px;
  }
`;
