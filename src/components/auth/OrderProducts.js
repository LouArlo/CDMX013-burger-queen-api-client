/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React from 'react';
import styled from 'styled-components';
import Almuerzos from './Almuerzos';
import Desayunos from './Desayunos';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <OrderContainer>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'Desayuno' : 'Almuerzo'}
        </button>
      </OrderContainer>
    );
  }
}
  /* background-color: #1ABAC8; */
  width: 100vw;
  height: 100vh;
  .orderButton {
    grid-column: span 3;
    grid-row: span 1;
    align-items: center;
    justify-content: center;
  }
  h3 {
    grid-column: span 5;
    grid-row: span 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .components {
    grid-column: span 5;
    grid-row: span 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  button {
    grid-column-start: 3;
    grid-column-end: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #b8e994;
    font-size: x-large;
  }
`;
