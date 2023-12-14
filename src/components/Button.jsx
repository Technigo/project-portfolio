import React from 'react';
import styled, { css } from 'styled-components';

const ProjectLinks = styled.div`
    display: flex;
    gap: 16px;

    @media (min-width: 744px) and (max-width: 1279px) {
        gap: 10px;
    }

    @media (max-width: 375px) {
        flex-direction: column;
        align-items: center;
        gap: 8px;
    }
`;

const ButtonStyle = styled.button`
    position: relative;
    display: inline-block;
    overflow: hidden;
    border-radius: 25px;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(255, 255, 255, 0.5);
        mix-blend-mode: multiply;
        opacity: 0;
        transition: opacity 0.3s;
        border-radius: 25px;
        background-color: transparent;
    }

    &:hover::before {
        opacity: 1;
        background-color: ${props => props.type === 'btn-live' ? 'pink' : 'blue'};
    }

    & svg {
        fill: ${props => props.type === 'btn-live' ? 'pink' : 'blue'};
    }

    @media (max-width: 375px) {
        display: block;
        width: 100%;
        margin-bottom: 10px;
        text-align: center;
    }
`;

const ContactList = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;

    @media (min-width: 744px) and (max-width: 1279px) {
        gap: 15px;
    }

    @media (max-width: 375px) {
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
    }
`;

const ContactLink = styled.a`
    text-align: center;
    background-color: transparent;
    border: none;

    & img {
        filter: grayscale(100%);
        transition: filter 0.3s;
        background-color: transparent;

        &:hover {
            filter: brightness(0);
        }
    }
`;

function Button({ type, label, icon, onClick }) {
  return (
      <ButtonStyle type={type} onClick={onClick}>
          {icon && <span className="icon">{icon}</span>}
          {label && <span className="label">{label}</span>}
      </ButtonStyle>
  );
}

export default Button;

