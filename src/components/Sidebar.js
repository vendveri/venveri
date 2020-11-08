import React from 'react';
import Links from '../constants/links';
import SocialLinks from '../constants/socialLinks';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

const StyledSidebar = styled.aside`
  background: var(--clr-concrete-white);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: grid;
  place-items: center;
  opacity: 0;
  transition: var(--transition);
  transform: translateX(-100%);
  &.show-sidebar {
    opacity: 1;
    transform: translateX(0);
  }
  .sidebar-links li {
    opacity: 0;
    animation: slideRight 0.5s ease-in-out 0.3s forwards;
    &:nth-of-type(1) {
      animation-delay: calc(0.25s * var(--delay-multiplier));
    }
    &:nth-of-type(2) {
      animation-delay: calc(0.5s * var(--delay-multiplier));
    }
    &:nth-of-type(3) {
      animation-delay: calc(0.75s * var(--delay-multiplier));
    }
    &:nth-of-type(4) {
      animation-delay: calc(1s * var(--delay-multiplier));
    }
    &:nth-of-type(5) {
      animation-delay: calc(1.25s * var(--delay-multiplier));
    }
  }
  .sidebar-links a {
    display: block;
    text-align: center;
    text-transform: capitalize;
    color: var(--clr-grey-5);
    letter-spacing: var(--spacing);
    margin-bottom: 0.5rem;
    font-size: 2rem;
    transition: var(--transition);
    border-radius: var(--radius);
    &:hover {
      background: var(--clr-primary-9);
      color: var(--clr-primary-5);
    }
  }
  .sidebar-icons li {
    opacity: 0;
    animation: slideUp 0.5s ease-in-out 0.3s forwards;
    &:nth-of-type(1) {
      animation-delay: calc(0.25s * var(--delay-multiplier));
    }
    &:nth-of-type(2) {
      animation-delay: calc(0.5s * var(--delay-multiplier));
    }
    &:nth-of-type(3) {
      animation-delay: calc(0.75s * var(--delay-multiplier));
    }
    &:nth-of-type(4) {
      animation-delay: calc(1s * var(--delay-multiplier));
    }
    &:nth-of-type(5) {
      animation-delay: calc(1.25s * var(--delay-multiplier));
    }
  }
  .sidebar-icons a {
    
  }
  .close-btn {
    position: absolute;
    right: 4.75%;
    top: 2.75%;
    font-size: 2.5rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-codgray-black);
    cursor: pointer;
  }
  @media screen and (min-width: 992px) {
    &.show-sidebar {
      opacity: 0;
      transform: translateX(-100);
    }
  }
  @keyframes slideRight {
    0% {
      transform: translateX(-200px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slideUp {
    0% {
      transform: translateY(200px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const Sidebar = ({ toggleSidebar, isOpen }) => {
  return (
    <StyledSidebar className={`${isOpen ? 'show-sidebar' : ''} `}>
      <button className="close-btn" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <Links styleClass={`${isOpen ? 'sidebar-links' : ''}`} />
        <SocialLinks styleClass={`${isOpen ? 'sidebar-icons' : ''} `} />
      </div>
    </StyledSidebar>
  );
};

export default Sidebar;
