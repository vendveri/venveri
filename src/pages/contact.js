import React, { useState } from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';

const StyledContactPage = styled.section`
  display: grid;
  place-items: center;
  min-height: calc(100vh - 12rem);
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
      color: var(--clr-primary);
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

const ContactPage = () => {
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
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formState }),
    })
      .then(() => navigate('/thank-you/'))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <>
      <SEO title="Contact" />
      <StyledContactPage className="page">
        <article>
          <h3>get in touch</h3>
          <form
            onSubmit={handleSubmit}
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            data-netlify-recaptcha="true"
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
              ></textarea>
            </div>
            <div data-netlify-recaptcha="true"></div>
            <button type="submit" className="submit-btn btn">
              submit here
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
