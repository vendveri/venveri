import React from 'react';
// import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import placeholder from '../../assets/images/placeholders/image-placeholder.png';
import { StyledContentBlock, StyledHeadingBlock } from './styles';

export default function HomePage({ data }) {
  console.log(data);
  const { block1, health, highRisk, trait, cert, audit, founder } = data;
  const { background, title, subtitle } = block1;

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

  // cert
  const {
    question: certQuestion,
    buttonText: certButtonText,
    answer: certAnswer,
    image: certImage,
  } = cert;

  // audit
  const {
    question: auditQuestion,
    buttonText: auditButtonText,
    answer: auditAnswer,
    image: auditImage,
  } = audit;

  // founder
  const {
    question: founderQuestion,
    buttonText: founderButtonText,
    answer: founderAnswer,
    image: founderImage,
  } = founder;

  return (
    <>
      {/* hero */}
      <StyledContentBlock
        background={background ? background.fluid.src : null}
        color="var(--clr-concrete-white)"
        baseHeight={100}
      >
        <StyledHeadingBlock>
          <h2>{subtitle}</h2>
          <h1>{title}</h1>
        </StyledHeadingBlock>
      </StyledContentBlock>

      {/* founder */}
      <StyledContentBlock>
        <div>
          <h1>founder</h1>
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
          <p>{auditQuestion}</p>
          <h3>Bubble Graph (animation)</h3>
          <p>{auditAnswer.answer}</p>
          <Img fixed={auditImage.fixed}></Img>
          <button className="btn">{auditButtonText}</button>
        </div>
      </StyledContentBlock>

      {/* cert */}
      <StyledContentBlock>
        <div>
          <h2>{certQuestion}</h2>
          <p>{certAnswer.answer}</p>
          <Img fixed={certImage.fixed}></Img>
          <button className="btn">{certButtonText}</button>
        </div>
      </StyledContentBlock>

      {/* protect */}
      <StyledContentBlock>
        <div>
          <h2>Protect your assets</h2>
          <p>Protect your assets and make sure no theft takes place.</p>
          <p>
            Do you know the names of people on the job site? What if one of them
            steals something and the high risk vendor claims to have no
            knowledge of that person?
          </p>
          <img src={placeholder} alt="Person sneaking something into pocket" />
          <p>Picture of sneaking something into pocket</p>
          <p>
            You need to know who is on these job sites. Our quick audit will
            gather and supply all that information before the job starts.
          </p>
          <h2>Protect Your Liabilities Now (button)</h2>
        </div>
      </StyledContentBlock>

      {/* health */}
      <StyledContentBlock>
        <div>
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
          <h2>Common Traits of Under the table</h2>
          <ul>
            <li>Workers more likely to be monetarily challenged </li>
            <li>Have less to lose and more to gain seeking legal action</li>
            <li>
              Will seek legal action against multiple parties for an injury
            </li>
            <li>Can sometimes be more prone to theft </li>
          </ul>

          <p>
            This is not all, cases but many! Bottom line, it greatly increases
            your risks on all levels.
          </p>

          <p>
            How our services will protect you - Click to take to High Risk
            Protection
          </p>

          <p>Ready to Learn More - lLead Contact Sheet</p>
        </div>
      </StyledContentBlock>

      {/* subcontractors */}
      <StyledContentBlock>
        <div>
          <h2>Subcontractors of High Risk Vendors</h2>
          <p>little bit sticking out big ice berg underneath </p>
          <p>
            The high risk vendor supplied insurance. They now have full access
            to your property.
          </p>

          <img src={placeholder} alt="iceberg" />

          <p>Makes you wonder</p>
          <p>Do the subcontractors have insurance?</p>
          <p>Are you listed as an additional insured on their policy?</p>
          <p>
            Is the subcontractor listed as an additional insured on the vendors
            policy?
          </p>
          <p>
            How do you know if they are bringing on their own sub-contractors?
          </p>
          <p> Who is the subcontractor bringing onsite?</p>

          <p>
            How our services will protect you - Click to take to High Risk
            Protection
          </p>

          <p>Ready to Learn More - Lead Contact Sheet </p>
          <p> Third Tab-</p>
          <p>High Risk Protection</p>
          <p>
            Our service will decrease your liabilities immensely. It will also
            raise the bar for your High Risk Vendors. Your jobs will go
            smoother, safer, and quicker!
          </p>
          <img
            src={placeholder}
            alt="Bryan And Jason Co Founders & Managing Partners"
          />
          <p>
            We have created this service to close huge liability gaps that we
            have personally witnessed working on 1000’s of job sites over the
            past 16 years
          </p>
          <p>Video Button showing liabilities </p>
          <p>What’s a HRV - takes to HRV tab</p>
          <p>Learn More (contact form button)</p>
        </div>
      </StyledContentBlock>

      {/* process */}
      <StyledContentBlock>
        <div>
          Our Process is thorough but easy for all parties. Use process picture
          supplied by Bryan 5 Icon Pix Title of Each and bullets to be listed
          under each You Send us HRV Contact Information VendVeri Emails Quick
          Audit to HRV HRV Fill Out Quick Audit VendVeri Make sure Audit
          Complete Send Back to HRV is more info is needed Validate Insurance
          Review Risk Communicate Issues Color Code Risk - You Receive Complete
          Audit Color Coded to show high, medium, moderate, low risk
          ________________________________Learn More (contact form button)
        </div>
      </StyledContentBlock>

      {/* protection */}
      <StyledContentBlock>
        <div>
          For a more indepth look at our protection services and rates call us
          at 1-800-Get-Safe or fill out the form below! A representative will be
          in touch shortly.
        </div>
      </StyledContentBlock>

      {/* industry   */}
      <StyledContentBlock>
        <div>
          Industries Served - click drop down of industries Property Managers
          Schools & Universities Government Corporate America
        </div>
      </StyledContentBlock>

      {/* propertyManager */}
      <StyledContentBlock>
        <div>
          Property Managers With Many Tenants in a building come many vendors.
          It is easy for details to get overlooked. Easy to be too busy and let
          liabilities slip by! Tracking high risk vendors is a necessity in
          types of environments. Liability Video - button Contact form button
        </div>
      </StyledContentBlock>

      {/* school */}
      <StyledContentBlock>
        <div>
          Schools and Universities Sprawling campuses, many buildings, multiple
          facilities departments managing vendors on jobs. There isn’t a better
          place to streamline the accountability of high risk vendors with our
          services. Liability Video - button Contact form button
        </div>
      </StyledContentBlock>

      {/* government */}
      <StyledContentBlock>
        <div>
          <h2>Government Entities</h2>
          The government has a big responsibility to set the guidelines for High
          Risk work being performed onsite. Without Vendveri services there are
          gaping holes of liability existing on job sites. Our services will
          fill those gaps. It will let vendors know that you demand a safe and
          organized environment at all times.
        </div>
      </StyledContentBlock>

      {/* corporate */}
      <StyledContentBlock>
        <div>
          <h2>Corporate America</h2>
          While they do not have as many High Risk jobs onsite they are by the
          least educated on the liabilities that exist. Vendveri is going to
          bring a new level of accountability and safety. It will protect the
          integrity of your business, employee health and safety. Liability
          Video - button Contact form button
        </div>
      </StyledContentBlock>
    </>
  );
}

// export default IndexPage;
