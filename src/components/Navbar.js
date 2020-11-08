import React from 'react';
import logo from '../assets/images/logo.svg';
import { FaAlignRight } from 'react-icons/fa';
import styled from 'styled-components';
import PageLinks from '../constants/links';
// import './Navbar.css';
const NavStyles = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  z-index: 200;
  background: var(--clr-paradiso-blue);
  .nav-center {
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      height: 35px;
      margin-bottom: 0.375rem;
    }
  }  
  .toggle-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-codgray-black);
    cursor: pointer;
    transition: var(--transition);
    &:hover {
      color: var(--clr-bluesmoke-green);
    }
  }
  .nav-links {
    display: none;
  }
  @media screen and (min-width: 768px) {
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
    }
    .toggle-btn {
      display: none;
    }
    .nav-links {
      display: flex;
      justify-content: flex-end;
      li {
        margin-right: 2rem;
      }
      a {
        text-transform: capitalize;
        color: var(--clr-codgray-black);
        font-weight: bold;
        letter-spacing: var(--spacing);
        transition: var(--transition);
        padding: 0.5rem 0;
        &:hover {
          color: var(--clr-codgray-black);
          box-shadow: 0px 2px var(--clr-codgray-black);
        }
      }
    }
  }
  @media screen and (min-width: 992px) {
    background: transparent;
  }
`;


const Navbar = ({ toggleSidebar }) => {
  return (
    <NavStyles>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </NavStyles>
  );
};

export default Navbar;
