import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Menu from '../functions/Menu';

function Desayunos() {
  return (
    <OrderContainer>
      <h3>Desayunos</h3>
      <div className="productView">
        <Menu />
      </div>
    </OrderContainer>
  );
}

export default Desayunos;

const OrderContainer = styled.div`
 margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(9, 1fr);
 /*  background-color: #1ABAC8; */
  width: 100vw;
  height: 80vh;

.productView {
  grid-column: 1;
  grid-column-end: 6;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  justify-content: flex-start; 
}
.clientView{
  display: flex;
  grid-row:3;
}

p {
  display: inline-block;
    /* left: 39px; */
    /* top: 445px; */
    font-size: x-large;
    /* position: absolute; */
    margin-left: 4px;
    margin-top: 50px;
}

.clientInput {
  background-color: black;
  color: white;
  margin-left: 20px;
  margin-top: 50px;
  width:300px;
  height:20px;
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
button {
    width: 100px;
    height:70px;
    display: flex;
    align-items: center;
    background: aliceblue;
    font-size: medium;
    border-radius: 5px;
    margin-right: 42px;
    margin-top: 18px;
    border:none;
}
button:hover{
  background: lightsteelblue;
}
.buttonStyle{
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    align-content: flex-start;
} 
.addBotton{
  width: 20px;
  height: 20px;
  display: inline-block;
}
.restBotton{
  width: 20px;
  height: 20px;
  display: inline-block;
}
.menuStyle {
    display: flex;
    grid-column: span 2;
    grid-row: span 2;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  
  OrderTake{
    grid-column: 3:
    grid-row: 3;
    display: flex;
  } 
.components{
  padding: 10px;
  width: 1000px;
  height: 451px;
  display: inline-block;
  background: lightsteelblue;
  margin-top: 130px;
  font-size:18px;
}
.headerOrder{
  top:540px;
  left:56px;
}
.layoutname{
  display: inline-block;
  width: 415px;
}
.layoutprice{
  display: inline-block;
  width: 200px;
  /* display:flex; */
}
.layoutqty{
  display: inline-block;
  width: 25px;
}
element.style {
  display: inline-block;
}
`;
