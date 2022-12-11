/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styled from 'styled-components';

function BurgerButton(props) {
  return (
    <Burger>
      <div
        onClick={props.handleClick}
        // eslint-disable-next-line react/destructuring-assignment
        className={`nav-icon1 ${props.clicked ? 'open' : ''}`}
      >
        <span />
        <span />
        <span />
      </div>
    </Burger>
  );
}
export default BurgerButton;

const Burger = styled.div`
* {
    margin: 0;
    padding: 0; 
  }
  
  /* Icon 1 */
  
  .nav-icon1, #nav-icon2, #nav-icon3, #nav-icon4 {
    width: 35px;
    height: 30px;
    position: relative;
    margin: 10px 10px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;
  }
  
  .nav-icon1 span, #nav-icon3 span, #nav-icon4 span {
    display: block;
    position: absolute;
    height: 9px;
    width: 100%;
    background: #fff;
    border-radius: 9px;
    opacity: 1;
    left: 244px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
  }
  
  .nav-icon1 span:nth-child(1) {
    top: 0px;
   
  }
  
  .nav-icon1 span:nth-child(2) {
    top: 18px;
  }
  
  .nav-icon1 span:nth-child(3) {
    top: 36px;
  }
  
  .nav-icon1.open span:nth-child(1) {
    top: 18px;
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    -o-transform: rotate(135deg);
    transform: rotate(135deg);
  }
  
  .nav-icon1.open span:nth-child(2) {
    opacity: 0;
    left: -60px;
  }
  
  .nav-icon1.open span:nth-child(3) {
    top: 18px;
    -webkit-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    transform: rotate(-135deg);
  }
  
`;
