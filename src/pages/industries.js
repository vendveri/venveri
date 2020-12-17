import React from 'react';
import { graphql } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import Img from 'gatsby-image';
import SEO from '../components/SEO';
import {StyledIndustryPageBlock} from './styled-components';

export default function IndustriesPage({ data: {industries: {nodes: industries}} }) {
  return (<>
    <SEO title="VendVeri - Industries" />
    {industries.map(({content, header, image, buttonText}) => <StyledIndustryPageBlock>
      <div>
        <h2>{header}</h2>
        <div className="twoByOneGrid">
          <div className="box box1 content">
            {content !== null ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: content.childMarkdownRemark.html,
                }}
              />
            ) : undefined}
          </div>
          <div className="box box2">
            <Img fluid={image.fluid}></Img>
          </div>
        </div>
        <div className="buttons">
          {buttonText && (
            <AnchorLink to="/#animation" className="btn">
              {buttonText}
            </AnchorLink>
          )}
        </div>
      </div>
    </StyledIndustryPageBlock>)}
  </>);
};

export const query = graphql`
{
  industries: allContentfulIndustryServed {
    nodes {
      content {
        childMarkdownRemark {
          html
        }
      }
      header
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      buttonText
    }
  }
}
`;