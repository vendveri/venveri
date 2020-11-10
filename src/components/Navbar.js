import React from 'react';
import { Link } from 'gatsby';
import logo from '../assets/images/logo.svg';
import { FaAlignRight } from 'react-icons/fa';
import styled from 'styled-components';
import PageLinks from '../constants/links';

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  z-index: 200;
  background: var(--clr-concrete-white);
  .nav-center {
    width: 100%;
    padding: 0 2rem;
    margin: 0 auto;
  }
  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      height: 3.5rem;
    }
  }
  .toggle-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary);
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
      gap: 1rem;
      a {
        text-transform: capitalize;
        color: var(--clr-primary);
        font-weight: bold;
        letter-spacing: var(--spacing);
        transition: var(--transition);
        padding: 1rem;
        border-radius: 3px;
        &[aria-current="page"] {
          p {
            border-bottom: 2px solid;
          }
        }
        p {
          display: unset;
          margin: 0;
          padding: 0;
          color: inherit;
          transition: var(--transition);
          border-bottom: 2px solid rgba(0,0,0,0);
        }
        &:hover {
          color: var(--clr-codgray-black);
          p {
            border-bottom: 2px solid;
          }
        }
      }
    }
  }
`;

const Navbar = ({ toggleSidebar, scrollPosition }, props) => {
  return (
    <StyledNav scrollPosition={scrollPosition}>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
            />
          </Link>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </StyledNav>
  );
};

export default Navbar;
