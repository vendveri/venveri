import React, { useState } from 'react';
import { graphql, navigate } from 'gatsby';
import SEO from '../components/SEO';
import { StyledContactPage } from './ContactPageStyles';

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
        background={background ? `url(${background.fluid.src})` : null}>
        <article>
          <h3>Get in Touch!</h3>
          <p>
            For a more in-depth look at our protection services and rates call
            us at 1-800-Get-Safe or fill out the form below! A representative
            will be in touch shortly.
          </p>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/thank-you"
            onSubmit={handleSubmit}>
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
