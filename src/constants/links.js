import React from 'react';
import { Link } from 'gatsby';

const Links = ({ styleClass, toggleSidebar }) => (
  <ul className={styleClass}>
    <li>
      <Link to="/#top" className="page-link" onClick={toggleSidebar}>
        <p id="home-page">Home</p>
      </Link>
    </li>
    <li>
      <Link to="/#industries" className="page-link" onClick={toggleSidebar}>
        <p id="industries-page">Industries</p>
      </Link>
    </li>
    <li>
      <Link to="/contact" className="page-link" onClick={toggleSidebar}>
        <p id="contact-page">Contact Us</p>
      </Link>
    </li>
    <li>
      <a
        href="tel:1-800-203-7010"
        className="phone-link"
        onClick={toggleSidebar}>
        <p id="phone">1-800-203-7010</p>
      </a>
    </li>
  </ul>
);

export default Links;
