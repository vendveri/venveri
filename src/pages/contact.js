import React, { useState } from 'react';
import { graphql, navigate } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/SEO';

const StyledContactPage = styled.section`
  display: grid;
  place-items: center;
  min-height: calc(100vh - 12rem);
  background-color: rgba(255, 0, 0, 0.5);
  background: ${({ background }) => background || 'var(--clr-red-2)'};
  background-size: cover;
  background-position: center;
  article {
    margin: 2rem;
    background: var(--clr-concrete-white);
    border-radius: var(--radius);
    text-align: center;
    box-shadow: var(--light-shadow);
    transition: var(--transition);
    width: 90vw;
    max-width: var(--max-width);
    &:hover {
      box-shadow: var(--dark-shadow);
    }

    h3 {
      padding-top: 1.25rem;
      color: var(--clr-primary);
    }
    .form-group {
      padding: 1rem 1.5rem;
      /* display: flex;
      flex-flow: row wrap;
      gap: 2rem;
      align-items: center;
      justify-content: center; */
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
        color: var(--clr-paradiso-blue);
        text-transform: uppercase;
        letter-spacing: var(--spacing);
      }
    }
    textarea {
      resize: vertical;
    }
    .submit-btn {
      display: block;
      width: 100%;
      padding: 1rem;
      border-bottom-left-radius: var(--radius);
      border-bottom-right-radius: var(--radius);
      border-top-right-radius: 0;
      border-top-left-radius: 0;
      background: var(--clr-dark-blue);
    }
  }
`;

const ContactPage = ({
  data: {
    hero: { background },
  },
}) => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    companyName: '',
    phone: '',
    email: '',
    message: '',
  });

  // encodes the captured form data in the format that Netlify's backend requires
  // example: form-name=contact&firstName=a&lastName=b&jobTitle=a&companyName=a&phone=3&email=me%40you.com&message=tes
  const encode = (data) =>
    Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      )
      .join('&');

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...formState,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      /*eslint-disable */
      .catch((error) => alert(error));
    /* eslint-enable */
  };

  return (
    <>
      <SEO title="VendVeri - Contact" />
      <StyledContactPage
        className="page"
        background={background ? `url(${background.fluid.src})` : null}
      >
        <article>
          <h3>Get in Touch!</h3>
          <p>
            For a more in-depth look at our protection services and rates call
            us at 1 (800) 929-0849 or fill out the form below! A representative
            will be in touch shortly.
          </p>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/thank-you"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="form-group">
              <label htmlFor="first-name" className="sr-only">
                First Name
              </label>
              <input
                id="first-name"
                name="firstName"
                type="text"
                placeholder="First Name"
                className="form-control"
                required
                onChange={handleChange}
                value={formState.firstName}
              />
              <label htmlFor="last-name" className="sr-only">
                Last Name
              </label>
              <input
                id="last-name"
                name="lastName"
                type="text"
                placeholder="Last Name"
                className="form-control"
                required
                onChange={handleChange}
                value={formState.lastName}
              />
              <label htmlFor="job-title" className="sr-only">
                Job Title
              </label>
              <input
                id="job-title"
                name="jobTitle"
                type="text"
                placeholder="Job Title"
                className="form-control"
                required
                onChange={handleChange}
                value={formState.jobTitle}
              />
              <label htmlFor="company-name" className="sr-only">
                Company Name
              </label>
              <input
                id="company-name"
                name="companyName"
                type="text"
                placeholder="Company Name"
                className="form-control"
                required
                onChange={handleChange}
                value={formState.companyName}
              />
              <label htmlFor="phone" className="sr-only">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="number"
                placeholder="Phone Number"
                className="form-control"
                required
                onChange={handleChange}
                value={formState.phone}
              />
              <label htmlFor="email" className="sr-only">
                Phone
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="form-control"
                onChange={handleChange}
                value={formState.email}
              />
              <label htmlFor="message" className="sr-only">
                How can we help you?
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
                required
                onChange={handleChange}
                value={formState.message}
              />
            </div>
            <button type="submit" className="submit-btn btn">
              Submit
            </button>
          </form>
        </article>
      </StyledContactPage>
      {/* </div> */}
      {/* /.page */}
    </>
  );
};

export default ContactPage;
export const query = graphql`
  {
    hero: contentfulHero {
      background {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;
