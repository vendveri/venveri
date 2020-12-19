import styled from 'styled-components';

const StyledBaseContentBlock = styled.section`
  &:nth-child(4n-2) {
    background: ${({ background }) => background || 'var(--clr-paradiso-blue)'};
    background-size: cover;
    background-position: center;
    color: ${({ color }) => color || 'var(--clr-concrete-white)'};
  }
  &:nth-child(4n-1) {
    background: ${({ background }) => background || 'var(--clr-dark-blue)'};
    background-size: cover;
    background-position: center;
    color: ${({ color }) => color || 'var(--clr-concrete-white)'};
  }
  &:nth-child(4n) {
    background: ${({ background }) =>
      background || 'var(--clr-concrete-white)'};
    background-size: cover;
    background-position: center;
    color: ${({ color }) => color || 'inherit'};
  }
  &:nth-child(4n-3) {
    background: ${({ background }) => background || 'var(--clr-red-2)'};
    background-size: cover;
    background-position: center;
    color: ${({ color }) => color || 'var(--clr-concrete-white)'};
    .btn {
      background: var(--clr-paradiso-blue);
    }
    .btn:hover {
      background: var(--clr-boston-blue);
    }
  }
  box-shadow: var(--dark-shadow);
  & > div {
    min-height: ${({ baseHeight }) =>
      baseHeight ? `${baseHeight}vh` : '10vh'};
    padding: var(--vertical-spacing) 2rem;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  &:first-of-type {
    & > div {
      min-height: ${({ baseHeight }) => `calc(${baseHeight || '50'}vh - 5rem)`};
    }
  }
  img {
    max-width: 100%;
  }
  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--horizontal-spacing);
    margin-top: 2rem;
  }
  ul li::before {
    content: '✔';
    margin-right: 0.5rem;
  }
  h2 {
    text-align: center;
  }
`;

const StyledQuestionBlock = styled(StyledBaseContentBlock)`
  .oneByTwoGrid {
    display: grid;
    gap: var(--horizontal-spacing);
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: dense;
  }
  @media (max-width: 768px) {
    .oneByTwoGrid {
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
    gap: var(--horizontal-spacing);
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
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
  }
  .box2 {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
  }
  .box3 {
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;
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
    gap: var(--horizontal-spacing);
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
    align-items: center;
    flex-flow: column;
    p {
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

// const StyledNoImageBlock = styled(StyledBaseContentBlock)`
//   .content {
//     img {
//       float: left;
//       max-width: calc(50% - 2rem);
//       margin-right: 2rem;
//     }
//     &::after {
//       content: '';
//       clear: both;
//       display: table;
//     }
//   }
//   @media (max-width: 768px) {
//     .content {
//       img {
//         float: none;
//         max-width: 100%;
//       }
//     }
//   }
// `;

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
    text-align: initial;
  }
  h1 {
    /* font-size: 6rem; */
  }
  h2 {
    /* font-size: 3rem; */
  }
`;
export const StyledFounderBlock = styled(StyledBaseContentBlock)`
  .twoByOneGrid {
    display: flex;
    flex-flow: row wrap;
    gap: var(--horizontal-spacing);
    justify-content: center;
    align-items: flex-start;
  }
  p {
    text-align: center;
  }
  .bottom {
    width: calc(700px + var(--horizontal-spacing));
    max-width: 100%;
    margin: 0 auto;
  }
  .circle {
    height: 300px;
    width: 300px;
    overflow: hidden;
    border-radius: 100%;
    border: 1rem solid var(--clr-fountain-blue);
  }
  .founderDetails {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    max-width: 350px;
    p {
      font-size: 1.3rem;
    }
    /* override global image padding */
    img {
      padding: 0;
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
export const StyledLegalBlock = styled(StyledGenericInfoBlock)`
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
export const StyledProcessBlock = styled(StyledBaseContentBlock)`
  .steps {
    display: flex;
    flex-flow: row wrap;
    gap: var(--horizontal-spacing);
  }
  .step {
    width: calc(
      20% - calc(calc(calc(var(--horizontal-spacing) * 2) + 4rem) * 0.8)
    );
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-start;
    gap: var(--horizontal-spacing);
    h3 {
      padding: 0;
      margin: 0;
    }
  }
  .icon {
    font-size: 10rem;
    display: flex;
    color: var(--clr-primary);
  }
  .arrow {
    font-size: 4rem;
    padding-top: 7rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    color: var(--clr-primary);
    .horizontal {
      display: block;
    }
    .vertical {
      display: none;
    }
  }
  @media (max-width: 768px) {
    .steps {
      flex-flow: column;
    }
    .step {
      width: 100%;
    }
    .arrow {
      padding-top: 0;
      .horizontal {
        display: none;
      }
      .vertical {
        display: block;
      }
    }
  }
`;
export const StyledIndustryBlock = styled(StyledGenericInfoBlock)`
  h3 {
    text-align: center;
  }
  select {
    background: none;
    border: 3px solid rgba(0, 0, 0, 0);
    border-radius: 0.5rem;
    color: var(--clr-concrete-white);
    padding: 0.5rem;
    option {
      color: var(--clr-dark-grey);
    }
    &:hover,
    &:active,
    &:focus {
      border: 3px solid var(--clr-concrete-white);
      outline: none;
    }
  }
`;
