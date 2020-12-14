// export { default } from './home';
import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import {
  StyledHeroBlock,
  StyledFounderBlock,
  StyledAuditBlock,
  StyledCertBlock,
  StyledCorporateBlock,
  StyledGovernmentBlock,
  StyledHealthBlock,
  StyledHighRiskBlock,
  StyledIndustryBlock,
  StyledLegalBlock,
  StyledLiabilityBlock,
  StyledProcessBlock,
  StyledPropertyManagerBlock,
  StyledProtectBlock,
  StyledSchoolBlock,
  StyledSubcontractorsBlock,
  StyledTraitBlock,
} from './styled-components';
import SEO from '../components/SEO';

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
      <SEO title="VendVeri"></SEO>
      {/* hero */}
      <StyledHeroBlock
        background={heroBackground ? `url(${heroBackground.fluid.src})` : null}
        color="var(--clr-concrete-white)"
        baseHeight={100}
      >
        <div>
          <h1>{heroTitle}</h1>
          <h2>{heroSubtitle}</h2>
        </div>
      </StyledHeroBlock>

      {/* founder */}
      <StyledFounderBlock
        background="var(--clr-dark-blue)"
        color="var(--clr-concrete-white)"
      >
        <div>
          <div className="content">
            <h2>{founderQuestion}</h2>
            {founderAnswer !== null ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: founderAnswer.childMarkdownRemark.html,
                }}
              />
            ) : undefined}
            <button className="btn">{founderButtonText}</button>
          </div>
          <div className="image">
            <Img fluid={founderImage.fluid}></Img>
          </div>
        </div>
      </StyledFounderBlock>

      {/* audit */}
      <StyledAuditBlock
        background="var(--clr-red-2)"
        color="var(--clr-concrete-white)"
      >
        <div>
          <div className="content">
            <h2>{auditQuestion}</h2>
            {auditAnswer !== null ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: auditAnswer.childMarkdownRemark.html,
                }}
              />
            ) : undefined}
            <button className="btn alt">{auditButtonText}</button>
          </div>
          <div className="image">
            <Img fluid={auditImage.fluid}></Img>
          </div>
        </div>
      </StyledAuditBlock>

      {/* cert */}
      <StyledCertBlock>
        <div>
          <div className="content">
            <h2>{certQuestion}</h2>
            {certAnswer !== null ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: certAnswer.childMarkdownRemark.html,
                }}
              />
            ) : undefined}
            <button className="btn">{certButtonText}</button>
          </div>
          <div className="image">
            <Img fluid={certImage.fluid}></Img>
          </div>
        </div>
      </StyledCertBlock>

      {/* protect */}
      <StyledProtectBlock
        background="var(--clr-paradiso-blue)"
        color="var(--clr-concrete-white)"
      >
        <div>
          <h2>{protectHeading}</h2>
          <div class="twoByTwoGrid">
            <div className="box box1">
              <Img fluid={protectImageOne.fluid}></Img>
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
              <Img fluid={protectImageTwo.fluid}></Img>
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
            <button className="btn">{protectButtonText}</button>
          </div>
        </div>
      </StyledProtectBlock>

      {/* health */}
      <StyledHealthBlock
        background="var(--clr-dark-blue)"
        color="var(--clr-concrete-white)"
      >
        <div>
          <h2>{healthHeading}</h2>
          <div className="twoByOneGrid">
            <div class="box box1 content">
              {healthContentOne !== null ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: healthContentOne.childMarkdownRemark.html,
                  }}
                />
              ) : undefined}
            </div>
            <div className="box box2">
              <Img fluid={healthImage.fluid}></Img>
            </div>
          </div>
          {healthContentTwo !== null ? (
            <div
              class="base content"
              dangerouslySetInnerHTML={{
                __html: healthContentTwo.childMarkdownRemark.html,
              }}
            />
          ) : undefined}
          <div className="buttons">
            <button className="btn">{healthButtonText}</button>
            <button className="btn">{healthAlternateText}</button>
          </div>
        </div>
      </StyledHealthBlock>

      {/* highRisk */}
      <StyledHighRiskBlock
        background="var(--clr-red-2)"
        color="var(--clr-concrete-white)"
      >
        <div>
          <h2>{highRiskHeading}</h2>
          <div className="twoByOneGrid">
            <div class="box box1 content">
              {highRiskContentOne !== null ? (
                <div
                  class="base content"
                  dangerouslySetInnerHTML={{
                    __html: highRiskContentOne.childMarkdownRemark.html,
                  }}
                />
              ) : undefined}
            </div>
            <div className="box box2">
              <Img fluid={highRiskImage.fluid}></Img>
            </div>
          </div>
          {highRiskContentTwo !== null ? (
            <div
              class="content base"
              dangerouslySetInnerHTML={{
                __html: highRiskContentTwo.childMarkdownRemark.html,
              }}
            />
          ) : undefined}
          <div className="buttons">
            <button className="btn alt">{highRiskButtonText}</button>
            <button className="btn alt">{highRiskAlternateText}</button>
          </div>
        </div>
      </StyledHighRiskBlock>

      {/* trait */}
      <StyledTraitBlock>
        <div>
          <h2>{traitHeading}</h2>
          <div className="twoByOneGrid">
            <div class="box box1 content">
              {traitContentOne !== null ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: traitContentOne.childMarkdownRemark.html,
                  }}
                />
              ) : undefined}
            </div>
            <div className="box box2">
              <Img fluid={traitImage.fluid}></Img>
            </div>
          </div>
          {traitContentTwo !== null ? (
            <div
              class="content base"
              dangerouslySetInnerHTML={{
                __html: traitContentTwo.childMarkdownRemark.html,
              }}
            />
          ) : undefined}
          <div className="buttons">
            <button className="btn">{traitButtonText}</button>
            <button className="btn">{traitAlternateText}</button>
          </div>
        </div>
      </StyledTraitBlock>

      {/* legal */}
      <StyledLegalBlock
        background="var(--clr-paradiso-blue)"
        color="var(--clr-concrete-white)"
      >
        <div>
          <h2>{legalHeading}</h2>
          {legalContentOne !== null ? (
            <div
              class="content"
              dangerouslySetInnerHTML={{
                __html: legalContentOne.childMarkdownRemark.html,
              }}
            />
          ) : undefined}
          <div className="buttons">
            <button className="btn">{legalButtonText}</button>
            <button className="btn">{legalAlternateText}</button>
          </div>
        </div>
      </StyledLegalBlock>

      {/* subcontractors */}
      <StyledSubcontractorsBlock
        background="var(--clr-dark-blue)"
        color="var(--clr-concrete-white)"
      >
        <div>
          <h2>{subcontractorHeading}</h2>
          <div className="twoByOneGrid">
            <div class="box box1 content">
              {subcontractorContentOne !== null ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: subcontractorContentOne.childMarkdownRemark.html,
                  }}
                />
              ) : undefined}
            </div>
            <div className="box box2">
              <Img fluid={subcontractorImage.fluid}></Img>
            </div>
          </div>
          {subcontractorContentTwo !== null ? (
            <div
              class="content base"
              dangerouslySetInnerHTML={{
                __html: subcontractorContentTwo.childMarkdownRemark.html,
              }}
            />
          ) : undefined}
          <div className="buttons">
            <button className="btn">{subcontractorButtonText}</button>
            <button className="btn">{subcontractorAlternateText}</button>
          </div>
        </div>
      </StyledSubcontractorsBlock>

      {/* liability */}
      <StyledLiabilityBlock
        background="var(--clr-red-2)"
        color="var(--clr-concrete-white)"
      >
        <div>
          <h2>{liabilityHeading}</h2>
          <div className="twoByOneGrid">
            <div class="box box1 content">
              {liabilityContentOne !== null ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: liabilityContentOne.childMarkdownRemark.html,
                  }}
                />
              ) : undefined}
            </div>
            <div className="box box2">
              <Img fluid={liabilityImage.fluid}></Img>
            </div>
          </div>

          {liabilityContentTwo !== null ? (
            <div
              class="content base"
              dangerouslySetInnerHTML={{
                __html: liabilityContentTwo.childMarkdownRemark.html,
              }}
            />
          ) : undefined}
          <div className="buttons">
            <button className="btn alt">{liabilityButtonText}</button>
            <button className="btn alt">{liabilityAlternateText}</button>
          </div>
        </div>
      </StyledLiabilityBlock>

      {/* process */}
      <StyledProcessBlock>
        <div>
          <h2>{processHeading}</h2>

          {processContentOne !== null ? (
            <div
              class="content"
              dangerouslySetInnerHTML={{
                __html: processContentOne.childMarkdownRemark.html,
              }}
            />
          ) : undefined}
          <div className="buttons">
            <button className="btn">{processButtonText}</button>
          </div>
        </div>
      </StyledProcessBlock>

      {/* industry   */}
      <StyledIndustryBlock
        background="var(--clr-paradiso-blue)"
        color="var(--clr-concrete-white)"
      >
        <div>
          <h2>{industryHeading}</h2>
          {industryContentOne !== null ? (
            <div
              class="content"
              dangerouslySetInnerHTML={{
                __html: industryContentOne.childMarkdownRemark.html,
              }}
            />
          ) : undefined}
        </div>
      </StyledIndustryBlock>

      {/* propertyManager */}
      <StyledPropertyManagerBlock
        background="var(--clr-dark-blue)"
        color="var(--clr-concrete-white)"
      >
        <div>
          <h2>{propertyHeading}</h2>

          {propertyContentOne !== null ? (
            <div
              class="content"
              dangerouslySetInnerHTML={{
                __html: propertyContentOne.childMarkdownRemark.html,
              }}
            />
          ) : undefined}
          <div className="buttons">
            <button className="btn">{propertyButtonText}</button>
            <button className="btn">{propertyAlternateText}</button>
          </div>
        </div>
      </StyledPropertyManagerBlock>

      {/* school */}
      <StyledSchoolBlock
        background="var(--clr-red-2)"
        color="var(--clr-concrete-white)"
      >
        <div>
          <h2>{schoolHeading}</h2>

          {schoolContentOne !== null ? (
            <div
              class="content"
              dangerouslySetInnerHTML={{
                __html: schoolContentOne.childMarkdownRemark.html,
              }}
            />
          ) : undefined}
          <div className="buttons">
            <button className="btn alt">{schoolButtonText}</button>
            <button className="btn alt">{schoolAlternateText}</button>
          </div>
        </div>
      </StyledSchoolBlock>

      {/* government */}
      <StyledGovernmentBlock>
        <div>
          <h2>{governmentHeading}</h2>

          {governmentContentOne !== null ? (
            <div
              class="content"
              dangerouslySetInnerHTML={{
                __html: governmentContentOne.childMarkdownRemark.html,
              }}
            />
          ) : undefined}
          <div className="buttons">
            <button className="btn">{governmentButtonText}</button>
            <button className="btn">{governmentAlternateText}</button>
          </div>
        </div>
      </StyledGovernmentBlock>

      {/* corporate */}
      <StyledCorporateBlock
        background="var(--clr-dark-grey)"
        color="var(--clr-concrete-white)"
      >
        <div>
          <h2>{corporateHeading}</h2>

          {corporateContentOne !== null ? (
            <div
              class="content"
              dangerouslySetInnerHTML={{
                __html: corporateContentOne.childMarkdownRemark.html,
              }}
            />
          ) : undefined}
          <div className="buttons">
            <button className="btn">{corporateButtonText}</button>
            <button className="btn">{corporateAlternateText}</button>
          </div>
        </div>
      </StyledCorporateBlock>
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
        fluid {
          ...GatsbyContentfulFluid
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
