import React from 'react';
import { Link } from 'gatsby';

const Links = ({ styleClass }) => {
  return (
    <ul className={styleClass}>
      <li>
        <Link to="/" className="page-link">
          <p>Home</p>
        </Link>
      </li>
      <li>
        <Link to="/contact" className="page-link">
          <p class="accent">Contact Us</p>
        </Link>
      </li>
    </ul>
  );
};

export default Links;
