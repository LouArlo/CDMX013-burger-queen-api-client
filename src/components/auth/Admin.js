import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom/dist';
import styled from 'styled-components';
import BurgerButton from '../buttons/BurgerButton';
import Products from './Products';
import Users from './Users';

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
          <Link to="/admin/users">Usuarios</Link>
          <Link to="/admin/products">Productos</Link>
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
const NavContainer = styled.nav`
  h2 {
    color: white;
    font-weight: 400;
    top: 0px;
    left: 119px;
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
