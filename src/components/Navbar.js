import React from 'react';
import { Link } from 'gatsby';
import { FaAlignRight } from 'react-icons/fa';
import logo from '../assets/images/logo.svg';
import PageLinks from '../constants/links';
import { StyledNav } from './NavbarStyles';

const Navbar = ({
  toggleSidebar,
  scrollPosition,
  pageActive,
  setPageActive,
}) => (
  <StyledNav scrollPosition={scrollPosition}>
    <div className="nav-center">
      <div className="nav-header">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignRight />
        </button>
      </div>
      <PageLinks
        styleClass="nav-links"
        pageActive={pageActive}
        setPageActive={setPageActive}
        toggleSidebar={toggleSidebar}
      />
    </div>
  </StyledNav>
);
export default Navbar;
