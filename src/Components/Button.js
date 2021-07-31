import React from 'react';
import styled from 'styled-components';

function Button({ filter, button }) {
  return (
    <ButtonsStyled>
      {button.map((btn, idx) => {
        return (
          <ButtonStyled key={idx} onClick={() => filter(btn)}>
            {btn}
          </ButtonStyled>
        );
      })}
    </ButtonsStyled>
  );
}

const ButtonsStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 70%;
  margin: 2.5rem auto;
`;

const ButtonStyled = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  background-color: var(--background-light-color-2);
  padding: 0.4rem 2rem;
  font-size: inherit;
  color: var(--white-color);
  transition: all 0.4s ease-in-out;
  &:active,
  &:focus {
    background-color: var(--primary-color);
  }
  &:not(:last-child) {
    margin-right: 0.6rem;
  }
  &:hover {
    background-color: var(--primary-color);
  }
`;

export default Button;
