import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {
  FaFacebookSquare,
  FaLinkedin,
  // FaDribbbleSquare,
  // FaBehanceSquare,
  FaTwitterSquare,
} from 'react-icons/fa';
import './socialLinks.css';

export default ({ styleClass }) => {
  const {
    socialLinks: {
      facebook: {
        childMarkdownRemark: { rawMarkdownBody: facebook },
      },
      twitter: {
        childMarkdownRemark: { rawMarkdownBody: twitter },
      },
      linkedin: {
        childMarkdownRemark: { rawMarkdownBody: linkedin },
      },
    },
  } = useStaticQuery(graphql`
    {
      socialLinks: contentfulSocialLinks(
        id: { eq: "f97621c0-974b-5016-b326-886e73cfa45f" }
      ) {
        facebook {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
        twitter {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
        linkedin {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
      }
    }
  `);

  const data = [
    {
      id: 1,
      icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
      url: facebook,
    },
    {
      id: 2,
      icon: <FaLinkedin className="social-icon"></FaLinkedin>,
      url: linkedin,
    },
    {
      id: 3,
      icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
      url: twitter,
    },
  ];

  return (
    <ul className={`social-links ${styleClass ? styleClass : ''}`}>
      {data
        .filter((l) => l && l.url && l.url.startsWith('http'))
        .map((link) => {
          return (
            <li key={link.id}>
              <a href={link.url} className="social-link">
                {link.icon}
              </a>
            </li>
          );
        })}
    </ul>
  );
};
