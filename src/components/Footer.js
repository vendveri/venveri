import React from 'react';
import SocialLinks from '../constants/socialLinks';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-icons" />
        <p>&copy;{new Date().getFullYear()} MDXBlog. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
