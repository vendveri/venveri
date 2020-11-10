import React from 'react';
import { Link } from 'gatsby';

const Links = ({ styleClass }) => {
  return (
    <ul className={styleClass}>
      <li>
        <Link
          to="/"
          activeStyle={{
            borderBottom: '2px',
            borderBottomStyle: 'solid',
            paddingBottom: '0.4rem',
          }}
          className="page-link"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className="page-link"
          activeStyle={{
            borderBottom: '1px',
            borderBottomStyle: 'solid',
            paddingBottom: '3px',
          }}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default Links;
