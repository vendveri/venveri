import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import './contact.css';

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <section className="contact-page page">
        <article className="contact-form">
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
      </section>
      {/* </div> */}
      {/* /.page */}
    </Layout>
  );
};

export default contact;
