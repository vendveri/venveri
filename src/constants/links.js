import React from 'react';
import { Link } from 'gatsby';

const Links = ({ styleClass, pageActive, setPageActive }) => (
  <ul className={styleClass}>
    <li>
      <Link to="/#" onClick={() => setPageActive('home')} className="page-link">
        <p className={pageActive === 'home' ? 'accent' : ''}>Home</p>
      </Link>
    </li>
    <li>
      <Link to="/#industries" onClick={() => setPageActive('industries')}>
        <p
          id="industries"
          className={pageActive === 'industries' ? 'accent' : ''}>
          Industries
        </p>
      </Link>
    </li>
    <li>
      <Link
        to="/contact"
        className="page-link"
        activeClassName="active"
        onClick={() => setPageActive('contact')}>
        <p className={pageActive === 'contact' ? 'accent' : ''}>Contact Us</p>
      </Link>
    </li>
  </ul>
);

export default Links;
