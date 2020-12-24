import React, { useState } from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { FaLongArrowAltRight, FaLongArrowAltDown } from 'react-icons/fa';
import { BsBuilding } from 'react-icons/bs';
import uuid from 'react-uuid';
import {
  AiOutlineAudit,
  AiOutlineFileSearch,
  AiOutlineSafetyCertificate,
} from 'react-icons/ai';
import { BiMailSend } from 'react-icons/bi';
import { Video } from '../components/Video';
import {
  StyledHeroBlock,
  StyledFounderBlock,
  StyledAuditBlock,
  StyledCertBlock,
  StyledHealthBlock,
  StyledHighRiskBlock,
  StyledIndustryBlock,
  StyledLegalBlock,
  StyledLiabilityBlock,
  StyledProcessBlock,
  StyledProtectBlock,
  StyledSubcontractorsBlock,
  StyledTraitBlock,
  StyledFinalMessageBlock,
} from './styled-components';
import SEO from '../components/SEO';

export default function HomePage({ data }) {
  const {
    hero,
    audit,
    founder,
    cert,
    protect,
    health,
    highRisk,
    trait,
    legal,
    subcontractor,
    liability,
    process,
    industries: { nodes: industries },
    finalMessage,
  } = data;

  const [industry, setIndustry] = useState(industries[0].id || '');

  // hero
  const {
    background: heroBackground,
    title: heroTitle,
    subtitle: heroSubtitle,
  } = hero;

  // audit
  const {
    question: auditQuestion,
    buttonText: auditButtonText,
    answer: auditAnswer,
    // image: auditImage,
  } = audit;

  // founder
  const {
    header: founderQuestion,
    content: founderAnswer,
    image1: founderImage1,
    image1Text: founderText1,
    image2: founderImage2,
    image2Text: founderText2,
  } = founder;

  // cert
  const {
    question: certQuestion,
    buttonText: certButtonText,
    answer: certAnswer,
    image: certImage,
  } = cert;

  // protect
  const {
    heading: protectHeading,
    buttonText: protectButtonText,
    // alternateButtonText: protectAlternateButtonText,
    contentOne: protectContentOne,
    contentTwo: protectContentTwo,
    imageOne: protectImageOne,
    imageTwo: protectImageTwo,
  } = protect;

  // health
  const {
    heading: healthHeading,
    buttonText: healthButtonText,
    buttonTextAlternate: healthAlternateText,
    contentOne: healthContentOne,
    contentTwo: healthContentTwo,
    image: healthImage,
  } = health;

  // highRisk
  const {
    heading: highRiskHeading,
    buttonText: highRiskButtonText,
    buttonTextAlternate: highRiskAlternateText,
    contentOne: highRiskContentOne,
    contentTwo: highRiskContentTwo,
    image: highRiskImage,
  } = highRisk;

  // trait
  const {
    heading: traitHeading,
    buttonText: traitButtonText,
    buttonTextAlternate: traitAlternateText,
    contentOne: traitContentOne,
    contentTwo: traitContentTwo,
    image: traitImage,
  } = trait;

  // legal
  const {
    heading: legalHeading,
    buttonText: legalButtonText,
    buttonTextAlternate: legalAlternateText,
    contentOne: legalContentOne,
    contentTwo: legalContentTwo,
    image: legalImage,
  } = legal;

  // subcontractor
  const {
    heading: subcontractorHeading,
    buttonText: subcontractorButtonText,
    buttonTextAlternate: subcontractorAlternateText,
    contentOne: subcontractorContentOne,
    contentTwo: subcontractorContentTwo,
    image: subcontractorImage,
  } = subcontractor;

  // liability
  const {
    heading: liabilityHeading,
    buttonText: liabilityButtonText,
    buttonTextAlternate: liabilityAlternateText,
    contentOne: liabilityContentOne,
    contentTwo: liabilityContentTwo,
    image: liabilityImage,
  } = liability;

  // process
  const {
    header: processHeading,
    step1: processContentOne,
    step2: processContentTwo,
    step3: processContentThree,
    step4: processContentFour,
    step5: processContentFive,
  } = process;

  const {
    heading: finalMessageHeading,
    buttonText: finalMessageButtonText,
    buttonTextAlternate: finalMessageAlternateText,
    contentOne: finalMessageContentOne,
    contentTwo: finalMessageContentTwo,
    image: finalMessageImage,
  } = finalMessage;

  return (
    <>
      <SEO title="VendVeri" />
      {/* hero */}
      <StyledHeroBlock
        background={heroBackground ? `url(${heroBackground.fluid.src})` : null}
        color="var(--clr-concrete-white)"
        baseHeight={100}>
        <div id="top">
          <h1>{heroTitle}</h1>
          <h2>{heroSubtitle}</h2>
        </div>
      </StyledHeroBlock>

      {/* audit */}
      <StyledAuditBlock>
        <div id="animation">
          <h2>{auditQuestion}</h2>
          <div className="oneByTwoGrid">
            <div className="content">
              {auditAnswer !== null ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: auditAnswer.childMarkdownRemark.html,
                  }}
                />
              ) : undefined}
              {auditButtonText && (
                <Link to="/contact" className="btn">
                  {auditButtonText}
                </Link>
              )}
            </div>
            <div className="image">
              {/* <Img fluid={auditImage.fluid} /> */}
              <Video />
            </div>
          </div>
        </div>
      </StyledAuditBlock>

      {/* founder */}
      <StyledFounderBlock>
        <div>
          <h2>{founderQuestion}</h2>
          {founderAnswer !== null ? (
            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html: founderAnswer.childMarkdownRemark.html,
              }}
            />
          ) : undefined}
          <div className="twoByOneGrid">
            <div className="founderDetails">
              <div className="circle">
                <Img fluid={founderImage1.fluid} />
              </div>
              {founderText1 !== null ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: founderText1.childMarkdownRemark.html,
                  }}
                />
              ) : undefined}
            </div>
            <div className="founderDetails">
              <div className="circle">
                <Img fluid={founderImage2.fluid} />
              </div>
              {founderText2 !== null ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: founderText2.childMarkdownRemark.html,
                  }}
                />
              ) : undefined}
            </div>
          </div>
        </div>
      </StyledFounderBlock>

      {/* cert */}
      <StyledCertBlock>
        <div>
          <h2>{certQuestion}</h2>
          <div className="oneByTwoGrid">
            <div className="content">
              {certAnswer !== null ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: certAnswer.childMarkdownRemark.html,
                  }}
                />
              ) : undefined}
              {certButtonText && (
                <Link to="/contact" className="btn">
                  {certButtonText}
                </Link>
              )}
            </div>
            <div className="image">
              <Img fluid={certImage.fluid} />
            </div>
          </div>
        </div>
      </StyledCertBlock>

      {/* protect */}
      <StyledProtectBlock>
        <div>
          <h2>{protectHeading}</h2>
          <div className="twoByTwoGrid">
            <div className="box box1">
              <Img fluid={protectImageOne.fluid} />
            </div>
            <div className="box box2 content">
              {protectContentOne !== null ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: protectContentOne.childMarkdownRemark.html,
                  }}
                />
              ) : undefined}
            </div>
            <div className="box box3">
              <Img fluid={protectImageTwo.fluid} />
            </div>
            <div className="box box4 content">
              {protectContentTwo !== null ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: protectContentTwo.childMarkdownRemark.html,
                  }}
                />
              ) : undefined}
            </div>
          </div>
          <div className="buttons">
            {protectButtonText && (
              <Link to="/contact" className="btn">
                {protectButtonText}
              </Link>
            )}
          </div>
        </div>
      </StyledProtectBlock>

      {/* health */}
      <StyledHealthBlock>
        <div>
          <h2>{healthHeading}</h2>
          <div className="twoByOneGrid">
            <div className="box box1 content">
              {healthContentOne !== null ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: healthContentOne.childMarkdownRemark.html,
                  }}
                />
              ) : undefined}
            </div>
            <div className="box box2">
              <Img fluid={healthImage.fluid} />
            </div>
          </div>
          {healthContentTwo !== null ? (
            <div
              className="base content"
              dangerouslySetInnerHTML={{
                __html: healthContentTwo.childMarkdownRemark.html,
              }}
            />
          ) : undefined}
          <div className="buttons">
            {healthButtonText && (
              <Link to="/contact" className="btn">
                {healthButtonText}
              </Link>
            )}
            {healthAlternateText && (
              <Link to="/contact" className="btn">
                {healthAlternateText}
              </Link>
            )}
          </div>
        </div>
      </StyledHealthBlock>

      {/* highRisk */}
      <StyledHighRiskBlock>
        <div>
          <h2>{highRiskHeading}</h2>
          {highRiskContentOne !== null ? (
            <div
              className="base content"
              dangerouslySetInnerHTML={{
                __html: highRiskContentOne.childMarkdownRemark.html,
              }}
            />
          ) : undefined}
          <div className="twoByOneGrid">
            <div className="box box1 content">
              {highRiskContentTwo !== null ? (
                <div
                  className="content base"
                  dangerouslySetInnerHTML={{
                    __html: highRiskContentTwo.childMarkdownRemark.html,
                  }}
                />
              ) : undefined}
            </div>
            <div className="box box2">
              <Img fluid={highRiskImage.fluid} />
            </div>
          </div>
          <div className="buttons">
            {highRiskButtonText && (
              <AnchorLink
                className="btn"
                to="/#animation"
                title="What is a High Risk Vendor">
                <span>{highRiskButtonText}</span>
              </AnchorLink>
            )}
            {highRiskAlternateText && (
              <AnchorLink className="btn" to="/#process" title="Our process">
                <span>{highRiskAlternateText}</span>
              </AnchorLink>
            )}
          </div>
        </div>
      </StyledHighRiskBlock>

      {/* trait */}
      <StyledTraitBlock>
        <div>
          <h2>{traitHeading}</h2>
          <div className="twoByOneGrid">
            <div className="box box1 content">
              {traitContentOne !== null ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: traitContentOne.childMarkdownRemark.html,
                  }}
                />
              ) : undefined}
            </div>
            <div className="box box2">
              <Img fluid={traitImage.fluid} />
            </div>
          </div>
          {traitContentTwo !== null ? (
            <div
              className="content base"
              dangerouslySetInnerHTML={{
                __html: traitContentTwo.childMarkdownRemark.html,
              }}
            />
          ) : undefined}
          <div className="buttons">
            {traitButtonText && (
              <AnchorLink
                className="btn"
                to="/#animation"
                title="What is a High Risk Vendor">
                <span>{traitButtonText}</span>
              </AnchorLink>
            )}
            {traitAlternateText && (
              <AnchorLink className="btn" to="/#process" title="Our process">
                <span>{traitButtonText}</span>
              </AnchorLink>
            )}
          </div>
        </div>
      </StyledTraitBlock>

      {/* legal */}
      <StyledLegalBlock>
        <div>
          <h2>{legalHeading}</h2>
          <div className="twoByOneGrid">
            <div className="box box1 content">
              {legalContentOne !== null ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: legalContentOne.childMarkdownRemark.html,
                  }}
                />
              ) : undefined}
            </div>
            <div className="box box2">
              <Img fluid={legalImage.fluid} />
            </div>
          </div>
          {legalContentTwo !== null ? (
            <div
              className="content base"
              dangerouslySetInnerHTML={{
                __html: legalContentTwo.childMarkdownRemark.html,
              }}
            />
          ) : undefined}
          <div className="buttons">
            {legalButtonText && (
              <AnchorLink className="btn" to="/#process" title="Our process">
                <span>{legalButtonText}</span>
              </AnchorLink>
            )}
            {legalAlternateText && (
              <Link className="btn" to="/contact">
                <span>{legalButtonText}</span>
              </Link>
            )}
          </div>
        </div>
      </StyledLegalBlock>

      {/* subcontractors */}
      <StyledSubcontractorsBlock>
        <div>
          <h2>{subcontractorHeading}</h2>
          {subcontractorContentOne !== null ? (
            <div
              className="content base"
              dangerouslySetInnerHTML={{
                __html: subcontractorContentOne.childMarkdownRemark.html,
              }}
            />
          ) : undefined}
          <div className="twoByOneGrid">
            <div className="box box1 content">
              {subcontractorContentTwo !== null ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: subcontractorContentTwo.childMarkdownRemark.html,
                  }}
                />
              ) : undefined}
            </div>
            <div className="box box2">
              <Img fluid={subcontractorImage.fluid} />
            </div>
          </div>
          <div className="buttons">
            {subcontractorButtonText && (
              <AnchorLink className="btn" to="/#risk" title="Our team">
                <span>{subcontractorButtonText}</span>
              </AnchorLink>
            )}
            {subcontractorAlternateText && (
              <Link to="/contact" className="btn">
                {subcontractorAlternateText}
              </Link>
            )}
          </div>
        </div>
      </StyledSubcontractorsBlock>

      {/* process */}
      <StyledProcessBlock>
        <div id="process">
          <h2>{processHeading}</h2>
          <div className="steps">
            <div className="step">
              <h3>You</h3>
              <div className="icon">
                <BsBuilding />
              </div>
              {processContentOne !== null ? (
                <div
                  className="content"
                  dangerouslySetInnerHTML={{
                    __html: processContentOne.childMarkdownRemark.html,
                  }}
                />
              ) : undefined}
            </div>
            <div className="arrow">
              <FaLongArrowAltRight className="horizontal" />
              <FaLongArrowAltDown className="vertical" />
            </div>
            <div className="step">
              <h3>VendVeri</h3>
              <div className="icon">
                <BiMailSend />
              </div>
              {processContentTwo !== null ? (
                <div
                  className="content"
                  dangerouslySetInnerHTML={{
                    __html: processContentTwo.childMarkdownRemark.html,
                  }}
                />
              ) : undefined}
            </div>
            <div className="arrow">
              <FaLongArrowAltRight className="horizontal" />
              <FaLongArrowAltDown className="vertical" />
            </div>
            <div className="step">
              <h3>HRV</h3>
              <div className="icon">
                <AiOutlineAudit />
              </div>
              {processContentThree !== null ? (
                <div
                  className="content"
                  dangerouslySetInnerHTML={{
                    __html: processContentThree.childMarkdownRemark.html,
                  }}
                />
              ) : undefined}
            </div>
            <div className="arrow">
              <FaLongArrowAltRight className="horizontal" />
              <FaLongArrowAltDown className="vertical" />
            </div>
            <div className="step">
              <h3>VendVeri</h3>
              <div className="icon">
                <AiOutlineFileSearch />
              </div>
              {processContentFour !== null ? (
                <div
                  className="content"
                  dangerouslySetInnerHTML={{
                    __html: processContentFour.childMarkdownRemark.html,
                  }}
                />
              ) : undefined}
            </div>
            <div className="arrow">
              <FaLongArrowAltRight className="horizontal" />
              <FaLongArrowAltDown className="vertical" />
            </div>
            <div className="step">
              <h3>You</h3>
              <div className="icon">
                <AiOutlineSafetyCertificate />
              </div>
              {processContentFive !== null ? (
                <div
                  className="content"
                  dangerouslySetInnerHTML={{
                    __html: processContentFive.childMarkdownRemark.html,
                  }}
                />
              ) : undefined}
            </div>
          </div>
        </div>
      </StyledProcessBlock>

      {/* liability */}
      <StyledLiabilityBlock>
        <div id="risk">
          <h2>{liabilityHeading}</h2>
          <div className="twoByOneGrid">
            <div className="box box1 content">
              {liabilityContentOne !== null ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: liabilityContentOne.childMarkdownRemark.html,
                  }}
                />
              ) : undefined}
            </div>
            <div className="box box2">
              <Img fluid={liabilityImage.fluid} />
            </div>
          </div>

          {liabilityContentTwo !== null ? (
            <div
              className="content base"
              dangerouslySetInnerHTML={{
                __html: liabilityContentTwo.childMarkdownRemark.html,
              }}
            />
          ) : undefined}
          <div className="buttons">
            {liabilityButtonText && (
              <AnchorLink
                className="btn"
                to="/#animation"
                title="What is a High Risk Vendor">
                <span>{liabilityButtonText}</span>
              </AnchorLink>
            )}
            {liabilityAlternateText && (
              <Link to="/contact" className="btn">
                {liabilityAlternateText}
              </Link>
            )}
          </div>
        </div>
      </StyledLiabilityBlock>

      {/* final message */}
      <StyledFinalMessageBlock>
        <div id="risk">
          <h2>{finalMessageHeading}</h2>
          <div className="twoByOneGrid">
            <div className="image">
              <Img fluid={finalMessageImage.fluid} />
            </div>
            <div className="content">
              {finalMessageContentOne !== null ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: finalMessageContentOne.childMarkdownRemark.html,
                  }}
                />
              ) : undefined}
              {finalMessageContentTwo !== null ? (
                <div
                  className="content base"
                  dangerouslySetInnerHTML={{
                    __html: finalMessageContentTwo.childMarkdownRemark.html,
                  }}
                />
              ) : undefined}
            </div>
          </div>
          <div className="buttons">
            {finalMessageButtonText && (
              <Link className="btn" to="/contact">
                <span>{finalMessageButtonText}</span>
              </Link>
            )}
            {finalMessageAlternateText && (
              <Link to="/contact" className="btn">
                {finalMessageAlternateText}
              </Link>
            )}
          </div>
        </div>
      </StyledFinalMessageBlock>

      {/* industry   */}
      <StyledIndustryBlock>
        <div id="industries">
          <h2>Industries Served</h2>
          <h3>
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}>
              {industries.map(({ id, header }) => (
                <option key={id} value={id}>
                  {header}
                </option>
              ))}
            </select>
          </h3>
          {industries
            .filter((i) => i.id === industry)
            .map(({ content, image, buttonText }) => (
              <React.Fragment key={uuid()}>
                {/* <h3>{header}</h3> */}
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
                    <Img fluid={image.fluid} />
                  </div>
                </div>
                <div className="buttons">
                  {buttonText && (
                    <AnchorLink to="/#animation" className="btn">
                      {buttonText}
                    </AnchorLink>
                  )}
                </div>
              </React.Fragment>
            ))}
        </div>
      </StyledIndustryBlock>
    </>
  );
}

export const query = graphql`
  {
    hero: contentfulHero {
      id
      title
      subtitle
      background {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }

    founder: contentfulFoundersBlock(
      id: { eq: "828894f4-bbd2-5a31-a23f-1401f5b29196" }
    ) {
      content {
        childMarkdownRemark {
          html
        }
      }
      image1 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      image1Text {
        childMarkdownRemark {
          html
        }
      }
      image2 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      image2Text {
        childMarkdownRemark {
          html
        }
      }
      header
    }

    audit: contentfulQuestionsBlock(
      id: { eq: "3256b497-a342-5d9d-87ca-ae49fea65cf8" }
    ) {
      answer {
        childMarkdownRemark {
          html
        }
      }
      buttonText
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      question
    }

    cert: contentfulQuestionsBlock(
      id: { eq: "ff163f87-8866-5b81-903e-954ba4db37f0" }
    ) {
      answer {
        childMarkdownRemark {
          html
        }
      }
      buttonText
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      question
    }

    protect: contentfulTwoPicsBlock(
      id: { eq: "38eb50c6-b4d6-53a7-a4f5-e33448e02baa" }
    ) {
      heading
      buttonText
      contentOne {
        childMarkdownRemark {
          html
        }
      }
      contentTwo {
        childMarkdownRemark {
          html
        }
      }
      imageOne {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      imageTwo {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }

    health: contentfulGenericInfoBlock(
      id: { eq: "28ed5887-0019-52a7-84ef-d977dc302aef" }
    ) {
      heading
      contentOne {
        childMarkdownRemark {
          html
        }
      }
      contentTwo {
        childMarkdownRemark {
          html
        }
      }
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      buttonText
      buttonTextAlternate
    }

    highRisk: contentfulGenericInfoBlock(
      id: { eq: "b2b8f555-fd89-5797-a8c0-c74174375f9c" }
    ) {
      heading
      contentOne {
        childMarkdownRemark {
          html
        }
      }
      contentTwo {
        childMarkdownRemark {
          html
        }
      }
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      buttonText
      buttonTextAlternate
    }

    trait: contentfulGenericInfoBlock(
      id: { eq: "c5b8286b-b200-5f8a-9851-592567ef6f1d" }
    ) {
      heading
      contentOne {
        childMarkdownRemark {
          html
        }
      }
      contentTwo {
        childMarkdownRemark {
          html
        }
      }
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      buttonText
      buttonTextAlternate
    }

    legal: contentfulGenericInfoBlock(
      id: { eq: "159ff438-f0e4-5d0c-b685-bc27ddedffdf" }
    ) {
      heading
      contentOne {
        childMarkdownRemark {
          html
        }
      }
      contentTwo {
        childMarkdownRemark {
          html
        }
      }
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      buttonText
      buttonTextAlternate
    }

    subcontractor: contentfulGenericInfoBlock(
      id: { eq: "b0d1206b-7cbd-5192-ba10-27b6c57c65ee" }
    ) {
      heading
      contentOne {
        childMarkdownRemark {
          html
        }
      }
      contentTwo {
        childMarkdownRemark {
          html
        }
      }
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      buttonText
      buttonTextAlternate
    }

    liability: contentfulGenericInfoBlock(
      id: { eq: "a92d5122-aa2d-5e88-9d4b-25c854b14ff5" }
    ) {
      heading
      contentOne {
        childMarkdownRemark {
          html
        }
      }
      contentTwo {
        childMarkdownRemark {
          html
        }
      }
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      buttonText
      buttonTextAlternate
    }

    finalMessage: contentfulGenericInfoBlock(
      id: { eq: "52144fb7-157f-5990-a373-eaba92053e54" }
    ) {
      heading
      contentOne {
        childMarkdownRemark {
          html
        }
      }
      contentTwo {
        childMarkdownRemark {
          html
        }
      }
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      buttonText
      buttonTextAlternate
    }

    process: contentfulProcessBlock(
      id: { eq: "71b3ce1f-dd41-5578-8606-a30c1727f1b0" }
    ) {
      step1 {
        childMarkdownRemark {
          html
        }
      }
      step2 {
        childMarkdownRemark {
          html
        }
      }
      step3 {
        childMarkdownRemark {
          html
        }
      }
      step4 {
        childMarkdownRemark {
          html
        }
      }
      step5 {
        childMarkdownRemark {
          html
        }
      }
      header
    }

    industries: allContentfulIndustryServed {
      nodes {
        id
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
