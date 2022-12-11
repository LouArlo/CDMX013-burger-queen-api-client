/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import styled from 'styled-components';

const types = ['Orden', 'Status', 'Home'];
function ToggleGroup() {
  const [active, setActive] = useState(types[0]);
  /*  console.log(useState(types[0]), useState(types[1]), useState(types[2])); */
  console.log(useState, 'en función');
  return (
    <ButtonGroup>
      {types.map((type) => (
        <ButtonToggle
          key={type}
          active={active === type}
          onClick={() => setActive(type)}
        >
          {(type)}
        </ButtonToggle>
      ))}
    </ButtonGroup>
  );
}

export default ToggleGroup;

const Button = styled.button`
  background-color: gray;
  color: yellow;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 5px 0px;
  cursor: pointer;
  &:disabled {
    color: grey;
    opacity: 0.7;
    cursor: default;
  }
  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    margin-left: auto;
    margin-right: auto;
    text_align: center;
    a {
      color: black;
      font-size: 2rem;
      display: block;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }
    }
  }
  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a {
      color: #333;
      font-size: 2rem;
      margin-top: 3rem;
    }
  }
`;
const ButtonToggle = styled(Button)`
  opacity: 0.6;
  ${({ active }) => active
    && `
    opacity: 1;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
`;
