import React from 'react';
import styled from 'styled-components';
import SocialLinks from '../constants/socialLinks';
// import './Footer.css';

const FooterStyles = styled.footer`
  height: 7rem;
  text-align: center;
  background: var(--clr-codgray-black);
  display: grid;
  place-items: center;

  ul {
    display: flex;
    justify-content: center;
    line-height: 1;
    margin-bottom: 0.5rem;
  }
  li {
    transition: var(--transition);
    &:hover {
      transform: translateY(-10%);
    }
  }
  a {
    font-size: 1.5rem;
    margin: 0 0.5rem;
    transition: var(--transition);
  }
  p {
    margin-bottom: 0;
    color: var(--clr-concrete-white);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
  }
`;

const Footer = () => {
  return (
    <FooterStyles>
      <SocialLinks />
      <p>&copy;{new Date().getFullYear()} MDXBlog. All rights reserved</p>
    </FooterStyles>
  );
};

export default Footer;
