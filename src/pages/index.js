import { graphql } from 'gatsby';

export const query = graphql`
  {
    block1: contentfulBlock1 {
      id
      title
      subtitle
      background {
        fluid(maxWidth: 3000) {
          src
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
  }
`;

export { default } from './home';
