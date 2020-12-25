import React from 'react';
import { Link } from 'gatsby';
import { FaAlignRight } from 'react-icons/fa';
import logo from '../assets/images/logo.svg';
import PageLinks from '../constants/links';
import { StyledNav } from './NavbarStyles';
import { StyledSubtitleBlock } from '../pages/styled-components';

const Navbar = ({ toggleSidebar, scrollPosition }) => (
  <>
    <StyledNav scrollPosition={scrollPosition}>
      <div className="nav-center">
        <div className="nav-header">
          <div className="logo">
            <Link to="/#top">
              <img src={logo} alt="VendVeri Logo" />
            </Link>
            <p className="subtext">
              Serving Property Managers, Universities, and Businesses Nationwide
            </p>
          </div>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight />
          </button>
        </div>
        <PageLinks styleClass="nav-links" />
      </div>
    </StyledNav>
    <StyledSubtitleBlock>
      <p>Serving Property Managers, Universities, and Businesses Nationwide</p>
    </StyledSubtitleBlock>
  </>
);
export default Navbar;
