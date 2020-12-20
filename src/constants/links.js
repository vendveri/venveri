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
  </ul>
);

export default Links;
