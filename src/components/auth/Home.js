import { Outlet } from 'react-router-dom/dist';
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import styled from 'styled-components';
import BurgerButton from '../buttons/BurgerButton';

export default function Home() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    // if is true this convert to falso and viscervers
    setClicked(!clicked);
  };

  return (
    <>
      <NavContainer>
        <h2>Burger Queen</h2>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a href="/">Home</a>
          <a href="/">Cocina</a>
          <a href="/">Servicio</a>
          <a href="/">Usuarios</a>
          <a href="/">Productos</a>
        </div>
        <Outlet />
        <div className="burger">
          <BurgerButton clicked={clicked} handleClick={handleClick} />
        </div>

      </NavContainer>
    </>
  );
}

const NavContainer = styled.nav`
  
  h2 {
    color: white;
    font-weight: 400;
    top: 0px;
    left: 10px;
  }
  padding: 4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  
  a {
    /* top: 0px;
    right: 1px; */
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .burger {
    @media(min-width: 768px){
     display: none;
    }
  }
  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    margin-left: auto;
    margin-right: auto;
    text_align: center;
    a{
      color: black;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      color: #333;
    }
    
  }
`;

/* <div className="topnav">
<a className="activeComanda" href="#home">
  Home
</a>
<a href="#comandas">Comandas</a>
<a href="#cocina">Cocina</a>
<a href="#admin">Administración</a>
</div> */
