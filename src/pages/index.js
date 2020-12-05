import { graphql } from 'gatsby';

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

export { default } from './home';
