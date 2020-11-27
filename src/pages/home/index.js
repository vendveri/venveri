import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { StyledContentBlock, StyledHeadingBlock } from './styled-components';

export default function HomePage({ data }) {
  const {
    hero,
    founder,
    audit,
    cert,
    protect,
    health,
    highRisk,
    trait,
    legal,
    subcontractor,
    liability,
    process,
    industry,
    property,
    school,
    government,
    corporate,
  } = data;

  // hero
  const {
    background: heroBackground,
    title: heroTitle,
    subtitle: heroSubtitle,
  } = hero;

  // founder
  const {
    question: founderQuestion,
    buttonText: founderButtonText,
    answer: founderAnswer,
    image: founderImage,
  } = founder;

  // audit
  const {
    question: auditQuestion,
    buttonText: auditButtonText,
    answer: auditAnswer,
    image: auditImage,
  } = audit;

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
    heading: processHeading,
    buttonText: processButtonText,
    // buttonTextAlternate: processAlternateText,
    contentOne: processContentOne,
  } = process;

  // industry
  const {
    heading: industryHeading,
    // buttonText: industryButtonText,
    // buttonTextAlternate: industryAlternateText,
    contentOne: industryContentOne,
  } = industry;

  // property
  const {
    heading: propertyHeading,
    buttonText: propertyButtonText,
    buttonTextAlternate: propertyAlternateText,
    contentOne: propertyContentOne,
  } = property;

  // school
  const {
    heading: schoolHeading,
    buttonText: schoolButtonText,
    buttonTextAlternate: schoolAlternateText,
    contentOne: schoolContentOne,
  } = school;

  // government
  const {
    heading: governmentHeading,
    buttonText: governmentButtonText,
    buttonTextAlternate: governmentAlternateText,
    contentOne: governmentContentOne,
  } = government;

  // corporate
  const {
    heading: corporateHeading,
    buttonText: corporateButtonText,
    buttonTextAlternate: corporateAlternateText,
    contentOne: corporateContentOne,
  } = corporate;

  return (
    <>
      {/* hero */}
      <StyledContentBlock
        background={heroBackground ? heroBackground.fluid.src : null}
        color="var(--clr-concrete-white)"
        baseHeight={100}
      >
        <StyledHeadingBlock>
          <h2>{heroSubtitle}</h2>
          <h1>{heroTitle}</h1>
        </StyledHeadingBlock>
      </StyledContentBlock>

      {/* founder */}
      <StyledContentBlock>
        <div>
          <h2>founder</h2>
          <h2>{founderQuestion}</h2>
          {founderAnswer !== null ? (
            <div
              dangerouslySetInnerHTML={{
                __html: founderAnswer.childMarkdownRemark.html,
              }}
            />
          ) : undefined}
          <Img fixed={founderImage.fixed}></Img>
          <button className="btn">{founderButtonText}</button>
        </div>
      </StyledContentBlock>

      {/* audit */}
      <StyledContentBlock>
        <div>
          <h2>Audit</h2>
          <p>{auditQuestion}</p>
          <h3>Bubble Graph (animation)</h3>
          {auditAnswer !== null ? (
            <div
              dangerouslySetInnerHTML={{
                __html: auditAnswer.childMarkdownRemark.html,
              }}
            />
          ) : undefined}
          <Img fixed={auditImage.fixed}></Img>
          <button className="btn">{auditButtonText}</button>
        </div>
      </StyledContentBlock>

      {/* cert */}
      <StyledContentBlock>
        <div>
          <h2>Cert</h2>
          <p>{certQuestion}</p>
          {certAnswer !== null ? (
            <div
              dangerouslySetInnerHTML={{
                __html: certAnswer.childMarkdownRemark.html,
              }}
            />
          ) : undefined}
          <Img fixed={certImage.fixed}></Img>
          <button className="btn">{certButtonText}</button>
        </div>
      </StyledContentBlock>

      {/* protect */}
      <StyledContentBlock>
        <div>
          <h2>Protect Your Assets</h2>
          <p>{protectHeading}</p>
          <Img fluid={protectImageOne.fluid}></Img>
          {protectContentOne !== null ? (
            <div
              dangerouslySetInnerHTML={{
                __html: protectContentOne.childMarkdownRemark.html,
              }}
            />
          ) : undefined}
          <Img fluid={protectImageTwo.fluid}></Img>
          {protectContentTwo !== null ? (
            <div
              dangerouslySetInnerHTML={{
                __html: protectContentTwo.childMarkdownRemark.html,
              }}
            />
          ) : undefined}
          <button className="btn">{protectButtonText}</button>
        </div>
      </StyledContentBlock>

      {/* health */}
      <StyledContentBlock>
        <div>
          <h2>Health</h2>
          <h2>{healthHeading}</h2>
          {healthContentOne !== null ? (
            <div
              dangerouslySetInnerHTML={{
                __html: healthContentOne.childMarkdownRemark.html,
              }}
            />
          ) : undefined}
          <Img fixed={healthImage.fixed}></Img>
          {healthContentTwo !== null ? (
            <div
              dangerouslySetInnerHTML={{
                __html: healthContentTwo.childMarkdownRemark.html,
              }}
            />
          ) : undefined}
          <button className="btn">{healthButtonText}</button>
          <button className="btn">{healthAlternateText}</button>
        </div>
      </StyledContentBlock>

      {/* highRisk */}
      <StyledContentBlock>
        <div>
          <h2>High Risk</h2>
          <h2>{highRiskHeading}</h2>

          {highRiskContentOne !== null ? (
            <div
              dangerouslySetInnerHTML={{
                __html: highRiskContentOne.childMarkdownRemark.html,
              }}
            />
          ) : undefined}

          {highRiskContentTwo !== null ? (
            <div
              dangerouslySetInnerHTML={{
                __html: highRiskContentTwo.childMarkdownRemark.html,
              }}
            />
          ) : undefined}

          <Img fixed={highRiskImage.fixed}></Img>

          <button className="btn">{highRiskButtonText}</button>
          <button className="btn">{highRiskAlternateText}</button>
        </div>
      </StyledContentBlock>

      {/* trait */}
      <StyledContentBlock>
        <div>
          <h2>Trait</h2>
          <h2>{traitHeading}</h2>

          {traitContentOne !== null ? (
            <div
              dangerouslySetInnerHTML={{
                __html: traitContentOne.childMarkdownRemark.html,
              }}
            />
          ) : undefined}

          {traitContentTwo !== null ? (
            <div
              dangerouslySetInnerHTML={{
                __html: traitContentTwo.childMarkdownRemark.html,
              }}
            />
          ) : undefined}

          <Img fixed={traitImage.fixed}></Img>

          <button className="btn">{traitButtonText}</button>
          <button className="btn">{traitAlternateText}</button>
        </div>
      </StyledContentBlock>

      {/* legal */}
      <StyledContentBlock>
        <div>
          <h2>Legal</h2>
          <h2>{legalHeading}</h2>

          {legalContentOne !== null ? (
            <div
              dangerouslySetInnerHTML={{
                __html: legalContentOne.childMarkdownRemark.html,
              }}
            />
          ) : undefined}

          <button className="btn">{legalButtonText}</button>
          <button className="btn">{legalAlternateText}</button>
        </div>
      </StyledContentBlock>

      {/* subcontractors */}
      <StyledContentBlock>
        <div>
          <h2>Subcontractor</h2>
          <h2>{subcontractorHeading}</h2>

          {subcontractorContentOne !== null ? (
            <div
              dangerouslySetInnerHTML={{
                __html: subcontractorContentOne.childMarkdownRemark.html,
              }}
            />
          ) : undefined}

          {subcontractorContentTwo !== null ? (
            <div
              dangerouslySetInnerHTML={{
                __html: subcontractorContentTwo.childMarkdownRemark.html,
              }}
            />
          ) : undefined}

          <Img fixed={subcontractorImage.fixed}></Img>

          <button className="btn">{subcontractorButtonText}</button>
          <button className="btn">{subcontractorAlternateText}</button>
        </div>
      </StyledContentBlock>

      {/* liability */}
      <StyledContentBlock>
        <div>
          <h2>Liability</h2>
          <h2>{liabilityHeading}</h2>

          {liabilityContentOne !== null ? (
            <div
              dangerouslySetInnerHTML={{
                __html: liabilityContentOne.childMarkdownRemark.html,
              }}
            />
          ) : undefined}

          {liabilityContentTwo !== null ? (
            <div
              dangerouslySetInnerHTML={{
                __html: liabilityContentTwo.childMarkdownRemark.html,
              }}
            />
          ) : undefined}

          <Img fixed={liabilityImage.fixed}></Img>

          <button className="btn">{liabilityButtonText}</button>
          <button className="btn">{liabilityAlternateText}</button>
        </div>
      </StyledContentBlock>

      {/* process */}
      <StyledContentBlock>
        <div>
          <h2>Process</h2>
          <h2>{processHeading}</h2>

          {processContentOne !== null ? (
            <div
              dangerouslySetInnerHTML={{
                __html: processContentOne.childMarkdownRemark.html,
              }}
            />
          ) : undefined}
          <button className="btn">{processButtonText}</button>
        </div>
      </StyledContentBlock>

      {/* industry   */}
      <StyledContentBlock>
        <div>
          <h2>Industry</h2>
          <h2>{industryHeading}</h2>

          {industryContentOne !== null ? (
            <div
              dangerouslySetInnerHTML={{
                __html: industryContentOne.childMarkdownRemark.html,
              }}
            />
          ) : undefined}
        </div>
      </StyledContentBlock>

      {/* propertyManager */}
      <StyledContentBlock>
        <div>
          <h2>Property</h2>
          <h2>{propertyHeading}</h2>

          {propertyContentOne !== null ? (
            <div
              dangerouslySetInnerHTML={{
                __html: propertyContentOne.childMarkdownRemark.html,
              }}
            />
          ) : undefined}

          <button className="btn">{propertyButtonText}</button>
          <button className="btn">{propertyAlternateText}</button>
        </div>
      </StyledContentBlock>

      {/* school */}
      <StyledContentBlock>
        <div>
          <h2>School</h2>
          <h2>{schoolHeading}</h2>

          {schoolContentOne !== null ? (
            <div
              dangerouslySetInnerHTML={{
                __html: schoolContentOne.childMarkdownRemark.html,
              }}
            />
          ) : undefined}

          <button className="btn">{schoolButtonText}</button>
          <button className="btn">{schoolAlternateText}</button>
        </div>
      </StyledContentBlock>

      {/* government */}
      <StyledContentBlock>
        <div>
          <h2>Government</h2>
          <h2>{governmentHeading}</h2>

          {governmentContentOne !== null ? (
            <div
              dangerouslySetInnerHTML={{
                __html: governmentContentOne.childMarkdownRemark.html,
              }}
            />
          ) : undefined}

          <button className="btn">{governmentButtonText}</button>
          <button className="btn">{governmentAlternateText}</button>
        </div>
      </StyledContentBlock>

      {/* corporate */}
      <StyledContentBlock>
        <div>
          <h2>Corporate</h2>
          <h2>{corporateHeading}</h2>

          {corporateContentOne !== null ? (
            <div
              dangerouslySetInnerHTML={{
                __html: corporateContentOne.childMarkdownRemark.html,
              }}
            />
          ) : undefined}

          <button className="btn">{corporateButtonText}</button>
          <button className="btn">{corporateAlternateText}</button>
        </div>
      </StyledContentBlock>
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

    founder: contentfulQuestionsBlock(
      id: { eq: "1a6e5861-f8aa-574b-b6c2-a8146b719481" }
    ) {
      answer {
        childMarkdownRemark {
          html
        }
      }
      buttonText
      image {
        fixed(width: 400) {
          ...GatsbyContentfulFixed_withWebp
        }
      }
      question
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
        fixed(width: 400) {
          ...GatsbyContentfulFixed_withWebp
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
        fixed(width: 400) {
          ...GatsbyContentfulFixed_withWebp
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
        fixed(width: 400) {
          ...GatsbyContentfulFixed_withWebp
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
        fixed(width: 400) {
          ...GatsbyContentfulFixed_withWebp
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
        fixed(width: 400) {
          ...GatsbyContentfulFixed_withWebp
        }
      }
      buttonText
      buttonTextAlternate
    }

    legal: contentfulNoImageBlock(
      id: { eq: "1d0d5602-161e-5bf7-af64-f3defb64e1d0" }
    ) {
      buttonText
      contentOne {
        childMarkdownRemark {
          html
        }
      }
      buttonAlternateText
      heading
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
        fixed(width: 400) {
          ...GatsbyContentfulFixed_withWebp
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
        fixed(width: 400) {
          ...GatsbyContentfulFixed_withWebp
        }
      }
      buttonText
      buttonTextAlternate
    }

    process: contentfulNoImageBlock(
      id: { eq: "b802c3ee-e2b9-5528-9851-d74f95fa154d" }
    ) {
      buttonText
      contentOne {
        childMarkdownRemark {
          html
        }
      }
      buttonAlternateText
      heading
    }

    industry: contentfulNoImageBlock(
      id: { eq: "b33b4465-d2e6-52b2-bbc3-1d90e5f2be1a" }
    ) {
      buttonText
      contentOne {
        childMarkdownRemark {
          html
        }
      }
      buttonAlternateText
      heading
    }

    property: contentfulNoImageBlock(
      id: { eq: "5b364b28-f87c-5d14-9424-98486816ecb9" }
    ) {
      buttonText
      contentOne {
        childMarkdownRemark {
          html
        }
      }
      buttonAlternateText
      heading
    }

    school: contentfulNoImageBlock(
      id: { eq: "0762869d-c549-52f3-98c1-429a2b318cea" }
    ) {
      buttonText
      contentOne {
        childMarkdownRemark {
          html
        }
      }
      buttonAlternateText
      heading
    }

    government: contentfulNoImageBlock(
      id: { eq: "ca6fd8e2-60b4-5f3d-a02f-150633099fcf" }
    ) {
      buttonText
      contentOne {
        childMarkdownRemark {
          html
        }
      }
      buttonAlternateText
      heading
    }

    corporate: contentfulNoImageBlock(
      id: { eq: "3ca8a19d-7de5-5824-aad9-d1411dd5e4c8" }
    ) {
      buttonText
      contentOne {
        childMarkdownRemark {
          html
        }
      }
      buttonAlternateText
      heading
    }
  }
`;
