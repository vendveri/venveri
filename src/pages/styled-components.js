import styled from 'styled-components';

const StyledBaseContentBlock = styled.section`
  background: ${({ background }) => {
    return background ? background : 'var(--clr-concrete-white)';
  }};
  background-size: cover;
  background-position: center;
  color: ${({ color }) => {
    return color || 'inherit';
  }};
  box-shadow: var(--dark-shadow);
  & > div {
    min-height: ${({ baseHeight }) => {
      return baseHeight ? `${baseHeight}vh` : '10vh';
    }};
    padding: 2rem;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  &:first-of-type {
    & > div {
      min-height: ${({ baseHeight }) => {
        return `calc(${baseHeight || '50'}vh - 5rem)`;
      }};
    }
  }
  img {
    max-width: 100%;
  }
  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
  }
  ul li::before {
    content: '✔';
    margin-right: 0.5rem;
  }
`;

const StyledQuestionBlock = styled(StyledBaseContentBlock)`
  & > div {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: dense;
  }
  @media (max-width: 768px) {
    & > div {
      grid-template-columns: 1fr;
    }
  }
  .content {
    display: flex;
    flex-flow: column;
    align-items: baseline;
    justify-content: center;
  }
`;

const StyledTwoImageBlock = styled(StyledBaseContentBlock)`
  h2 {
    /* font-size: 3rem; */
    text-align: center;
    margin-top: 0;
    margin-bottom: 2rem;
  }
  .twoByTwoGrid {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-auto-flow: dense;
  }
  .content {
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      text-align: center;
      font-size: 2.5rem;
      font-weight: 300;
    }
  }
  .box1 {
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;
  }
  .box2 {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
  }
  .box3 {
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
  }
  .box4 {
    grid-column: 2 / span 1;
    grid-row: 2 / span 1;
  }
  @media (max-width: 768px) {
    .twoByTwoGrid {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(auto, 4);
    }
    .box1 {
      grid-column: 1 / span 1;
      grid-row: 1 / span 1;
    }
    .box2 {
      grid-column: 1 / span 1;
      grid-row: 2 / span 1;
    }
    .box3 {
      grid-column: 1 / span 1;
      grid-row: 3 / span 1;
    }
    .box4 {
      grid-column: 1 / span 1;
      grid-row: 4 / span 1;
    }
  }
`;

const StyledGenericInfoBlock = styled(StyledBaseContentBlock)`
  h2 {
    text-align: center;
  }
  .twoByOneGrid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(auto, 1);
    gap: 2rem;
  }
  .content {
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      text-align: center;
      font-size: 2.5rem;
      font-weight: 300;
    }
    ul {
      font-size: 2.5rem;
    }
  }
  .base {
    justify-content: flex-start;
    align-items: flex-start;
    flex-flow: column;
    p {
      text-align: left;
      font-size: 2.5rem;
    }
    ul {
      font-size: 2.5rem;
    }
  }
  .box1 {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
  }
  .box2 {
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
  }
  @media (max-width: 768px) {
    .twoByOneGrid {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(auto, 2);
    }
    .box1 {
      grid-column: 1 / span 1;
      grid-row: 1 / span 1;
    }
    .box2 {
      grid-column: 1 / span 1;
      grid-row: 2 / span 1;
    }
  }
`;

const StyledNoImageBlock = styled(StyledBaseContentBlock)`
  .content {
    img {
      float: left;
      max-width: calc(50% - 2rem);
      margin-right: 2rem;
    }
    &::after {
      content: '';
      clear: both;
      display: table;
    }
  }
  @media (max-width: 768px) {
    .content {
      img {
        float: none;
        max-width: 100%;
      }
    }
  }
`;

export const StyledHeroBlock = styled(StyledBaseContentBlock)`
  & > div {
    display: flex;
    justify-content: center;
    flex-flow: column;
  }
  h1,
  h2,
  p {
    text-shadow: 1px 1px 4px #000;
    font-weight: 300;
  }
  h1 {
    /* font-size: 6rem; */
  }
  h2 {
    /* font-size: 3rem; */
  }
`;
export const StyledFounderBlock = styled(StyledQuestionBlock)`
  & > div {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 450px;
  }
  @media (max-width: 1000px) {
    & > div {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 768px) {
    & > div {
      grid-template-columns: 1fr;
    }
  }
`;
export const StyledAuditBlock = styled(StyledQuestionBlock)`
  .content {
    grid-column: 2/3;
  }
  .image {
    grid-column: 1/2;
  }
  @media (max-width: 768px) {
    .image,
    .content {
      grid-column: 1/2;
    }
  }
`;
export const StyledCertBlock = styled(StyledQuestionBlock)``;
export const StyledProtectBlock = styled(StyledTwoImageBlock)``;
export const StyledHealthBlock = styled(StyledGenericInfoBlock)``;
export const StyledHighRiskBlock = styled(StyledGenericInfoBlock)`
  .box1 {
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
  }
  .box2 {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
  }
  @media (max-width: 768px) {
    .box1 {
      grid-column: 1 / span 1;
      grid-row: 1 / span 1;
    }
    .box2 {
      grid-column: 1 / span 1;
      grid-row: 2 / span 1;
    }
  }
`;
export const StyledTraitBlock = styled(StyledGenericInfoBlock)``;
export const StyledLegalBlock = styled(StyledNoImageBlock)``;
export const StyledSubcontractorsBlock = styled(StyledGenericInfoBlock)``;
export const StyledLiabilityBlock = styled(StyledGenericInfoBlock)`
  .box1 {
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
  }
  .box2 {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
  }
  @media (max-width: 768px) {
    .box1 {
      grid-column: 1 / span 1;
      grid-row: 1 / span 1;
    }
    .box2 {
      grid-column: 1 / span 1;
      grid-row: 2 / span 1;
    }
  }
`;
export const StyledProcessBlock = styled(StyledNoImageBlock)``;
export const StyledIndustryBlock = styled(StyledNoImageBlock)``;
export const StyledPropertyManagerBlock = styled(StyledNoImageBlock)``;
export const StyledSchoolBlock = styled(StyledNoImageBlock)``;
export const StyledGovernmentBlock = styled(StyledNoImageBlock)``;
export const StyledCorporateBlock = styled(StyledNoImageBlock)``;

export const WorkflowWrapper = styled.ul`
  margin: 0;
  padding: 3rem 0;
  text-align: center;
  font-family: Ruda;

  li {
    float: none;
    list-style: none;
    display: inline-block;
    padding: 0 1.5rem;

    &.process_arrow {
      position: relative;
      bottom: 4rem;

      /* don't show arrows on phone */
      @media only screen and (max-width: 600px) {
        display: none;
      }
    }

    i {
      vertical-align: middle;
    }

    span {
      display: block;
      text-align: center;
      font-size: 17px;
      line-height: 55px;
      font-weight: 400;
    }
  }
`;

