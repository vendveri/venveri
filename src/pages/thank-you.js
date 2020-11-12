import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledSuccessPage = styled.section`
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

const ThankYouPage = () => (
  <>
    <StyledSuccessPage>
      <div className="page-center page">
        <h3>
          Thank you for submitting your information. A VendVeri representative
          will contact you shortly
        </h3>
        <Link to="/" className="btn">
          back home
        </Link>
      </div>
    </StyledSuccessPage>
  </>
);

export default ThankYouPage;
