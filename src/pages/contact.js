import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const StyledContactPage = styled.section`
  display: grid;
  place-items: center;
  padding: 5rem 0;
  article {
    background: var(--clr-concrete-white);
    border-radius: var(--radius);
    text-align: center;
    box-shadow: var(--light-shadow);
    transition: var(--transition);
    width: 90vw;
    max-width: 35rem;
    &:hover {
      box-shadow: var(--dark-shadow);
    }

    h3 {
      padding-top: 1.25rem;
      color: var(--clr-paradiso-blue);
    }
    .form-group {
      padding: 1rem 1.5rem;
    }
    .form-control {
      display: block;
      width: 100%;
      padding: 0.75rem 1rem;
      border: none;
      margin-bottom: 1.25rem;
      background: var(clr-codgray-black);
      /* background: red; */
      border-radius: var(--radius);
      text-transform: uppercase;
      letter-spacing: var(--spacing);
      &::placeholder {
        font-family: var(--ff-primary);
        color: var(--clr-jewel-green);
        text-transform: uppercase;
        letter-spacing: var(--spacing);
      }
    }
    .submit-btn {
      display: block;
      width: 100%;
      padding: 1rem;
      border-bottom-left-radius: var(--radius);
      border-bottom-right-radius: var(--radius);
      border-top-right-radius: 0;
      border-top-left-radius: 0;
    }
  }
`;

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <StyledContactPage className="page">
        <article>
          <h3>get in touch</h3>
          <form>
            <div className="form-group">
              <input
                name="name"
                type="text"
                placeholder="name"
                className="form-control"
              />
              <input
                name="email"
                type="email"
                placeholder="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              submit here
            </button>
          </form>
        </article>
      </StyledContactPage>
      {/* </div> */}
      {/* /.page */}
    </Layout>
  );
};

export default contact;
