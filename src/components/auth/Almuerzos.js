import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import MenuAlmuerzo from '../functions/MenuAlmuerzo';

function Almuerzos() {
  return (
    <OrderContainer>
      <h3>Almuerzos</h3>
      <MenuAlmuerzo />
    </OrderContainer>
  );
}

export default Almuerzos;

const OrderContainer = styled.div`
 margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(8, 1fr);
 /*  background-color: #1ABAC8; */
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
    font_size: xxx-large;
  }
  .components {
    /* grid-column: span 5; */
    
    /* grid-row: 2;
    display: flex;
    flex-direction: colum;
    -webkit-align-items: center;
    -webkit-box-align: center;
    align-items: center;
    justify-content: center;
    margin: 1rem; */
  }
  button {
    /* grid-row-start: span 2; */
    width: 294px;
    height: 45px;
      /* left: 36px;
    top: 269px; */
    display: flex;
    /* flex-direction: column;
    align-items: center;
    justify-content: center; */
    background: #cdcbcb70;
    font-size: medium;
    border-radius: 5px;
    margin: 7px;
    border:none;
  } 
  .menuStyle {
    display: flex;
    grid-column: span 2;
    grid-row: span 2;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  /* button {
    grid-column-start: 3;
    grid-column-end: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #b8e994;
    font-size: x-large;
  } */
`;
