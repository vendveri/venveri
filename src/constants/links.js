import React from 'react';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const Links = ({ styleClass }) => {
  return (
    <ul className={styleClass}>
      <li>
        <Link to="/" className="page-link">
          <p>Home</p>
        </Link>
      </li>
      <li>
        <AnchorLink className="page-link" to="/#industries" title="Industries">
          <p>Industries</p>
        </AnchorLink>
      </li>
      <li>
        <Link to="/contact" className="page-link">
          <p className="accent">Contact Us</p>
        </Link>
      </li>
    </ul>
  );
};

export default Links;
