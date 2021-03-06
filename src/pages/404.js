import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledErrorPage = styled.section`
  display: grid;
  place-items: center;
  background: var(--clr-primary);
  text-align: center;
  h1 {
    text-transform: uppercase;
    color: var(--clr-codgray-black);
    margin-bottom: 2rem;
  }
`;

const NotFoundPage = () => (
  <>
    <StyledErrorPage>
      <div className="page-center page">
        <span>404</span>
        <h3>Sorry, the page you tried cannot be found</h3>
        <Link to="/" className="btn">
          back home
        </Link>
      </div>
    </StyledErrorPage>
  </>
);

export default NotFoundPage;
