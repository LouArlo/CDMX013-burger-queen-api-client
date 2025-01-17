import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom/dist';
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
          <Link to="/kitchen">Cocina</Link>
          <Link to="/service">Servicio</Link>
          <Link to="/admin">Administracion</Link>
        </div>
        <div className="burger">
          <BurgerButton clicked={clicked} handleClick={handleClick} />

        </div>
      </NavContainer>
      <Outlet />
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
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .burger {
    @media (min-width: 768px) {
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
