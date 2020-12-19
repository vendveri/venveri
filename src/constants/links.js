import React from 'react';
import { Link } from 'gatsby';

const Links = ({ styleClass }) => (
  <ul className={styleClass}>
    <li>
      <Link to="/#top" className="page-link" activeClassName="active">
        <p>Home</p>
      </Link>
    </li>
    <li>
      <Link to="/#industries" className="page-link" activeClassName="active">
        <p>Industries</p>
      </Link>
    </li>
    <li>
      <Link to="/contact" className="page-link" activeClassName="active">
        <p className="accent">Contact Us</p>
      </Link>
    </li>
  </ul>
);

export default Links;
