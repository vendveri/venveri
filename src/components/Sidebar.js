import React from 'react';
// import SocialLinks from '../constants/socialLinks';
import { FaTimes } from 'react-icons/fa';
import Links from '../constants/links';
import { StyledSidebar } from './SidebarStyles';

const Sidebar = ({ toggleSidebar, isOpen }) => (
  <StyledSidebar className={`${isOpen ? 'show-sidebar' : ''} `}>
    <button type="button" className="close-btn" onClick={toggleSidebar}>
      <FaTimes />
    </button>
    <div className="side-container">
      <Links styleClass={`${isOpen ? 'sidebar-links' : ''}`} />
      {/* <SocialLinks styleClass={`${isOpen ? 'sidebar-icons' : ''} `} /> */}
    </div>
  </StyledSidebar>
);

export default Sidebar;
