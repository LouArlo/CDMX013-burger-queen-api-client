import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom/dist';
import styled from 'styled-components';
import BurgerButton from '../buttons/BurgerButton';
import StatusService from './StatusService';
import Desayunos from './Desayunos';
import Almuerzos from './Almuerzos';

export default function Service() {
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
          <Link to="/service/Desayunos">Desayunos</Link>
          <Link to="/service/Almuerzos">Almuerzos</Link>
          <Link to="/service/statusservice">Status</Link>
          <Link to="/home">Home</Link>
        </div>
        <div className="burger">
          <BurgerButton clicked={clicked} handleClick={handleClick} />
        </div>
      </NavContainer>
      <Outlet />
    </>
  );
}

/* import React, { useState } from 'react';
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* import { Outlet, Link } from 'react-router-dom/dist';
import styled from 'styled-components';
import BurgerButton from '../buttons/BurgerButton';
import OrderProducts from './OrderProducts';
import StatusService from './StatusService';
import ToggleGroup from '../buttons/ToggleButton';

const types = ['Orden', 'Status', 'Home'];
export default function Service() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    // if is true this convert to falso and viscervers
    setClicked(!clicked);
  };
  // console.log(clicked, useState);
  return (
    <>
      <NavContainer>
        <h2>Burger Queen</h2>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <div className="ButtonGroup">
            <div className="ButtonToggle">
              <ToggleGroup clicked={clicked} handleClick={handleClick} />
            </div>
          </div>
        </div>
        <div className="burger">
          <BurgerButton clicked={clicked} handleClick={handleClick} />
        </div>
      </NavContainer>
      <Outlet />
    </>
  );
} */

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

`;
