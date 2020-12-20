import React from 'react';
import { Link } from 'gatsby';

const Links = ({ styleClass }) => (
  <ul className={styleClass}>
    <li>
      <Link to="/#top" className="page-link">
        <p id="home-page">Home</p>
      </Link>
    </li>
    <li>
      <Link to="/#industries" className="page-link">
        <p id="industries-page">Industries</p>
      </Link>
    </li>
    <li>
      <Link to="/contact" className="page-link">
        <p id="contact-page">Contact Us</p>
      </Link>
    </li>
  </ul>
);

export default Links;
