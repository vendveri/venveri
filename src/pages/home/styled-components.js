import styled from 'styled-components';

const StyledBaseContentBlock = styled.section`
background: ${({background}) => {
  return background ? background : 'var(--clr-concrete-white)';
}};
background-size: cover;
background-position: center;
color: ${({color}) => {
  return color || 'inherit';
}};
box-shadow: var(--dark-shadow);
& > div {
  min-height: ${({baseHeight}) => {
    return baseHeight ? `${baseHeight}vh` : '10vh';
  }};
  padding: 2rem;
  margin: 0 auto;
  max-width: var(--max-width);
}
&:first-of-type {
  & > div {
    min-height: ${({baseHeight}) => {
      return `calc(${baseHeight || '50'}vh - 5rem)`;
    }};
  }
}
img {
  max-width: 100%;
}
`;

const StyledQuestionBlock = styled(StyledBaseContentBlock)`
&>div {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: dense;
}
@media (max-width: 768px) {
  &>div {
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
    font-size: 3rem;
    text-align: center;
    margin-top: 0;
    margin-bottom: 2rem;
  }
  .buttons {
    text-align: center;
    margin-top: 2rem;
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
    font-weight: 900;
    p {
      text-align: center;
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

export const StyledHeroBlock = styled(StyledBaseContentBlock)`
& > div {
  display: flex;
  justify-content: center;
  flex-flow: column;
}
h1, h2, p {
  text-shadow: 1px 1px 4px #000;
  font-weight: 300;
}
h1 {
  font-size: 6rem;
  margin-top: 1rem;
}
h2 {
  font-size: 3rem;
}
`;

export const StyledFounderBlock = styled(StyledQuestionBlock)`
&>div {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 450px;
}
@media (max-width: 1000px) {
  &>div {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 768px) {
  &>div {
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
  .image, .content {
    grid-column: 1/2;
  }
}
`;
export const StyledCertBlock = styled(StyledQuestionBlock)`

`;
export const StyledProtectBlock = styled(StyledTwoImageBlock)`

`;
export const StyledHealthBlock = styled(StyledBaseContentBlock)`

`;
export const StyledHighRiskBlock = styled(StyledBaseContentBlock)`

`;
export const StyledTraitBlock = styled(StyledBaseContentBlock)`

`;
export const StyledLegalBlock = styled(StyledBaseContentBlock)`

`;
export const StyledSubcontractorsBlock = styled(StyledBaseContentBlock)`

`;
export const StyledLiabilityBlock = styled(StyledBaseContentBlock)`

`;
export const StyledProcessBlock = styled(StyledBaseContentBlock)`

`;
export const StyledIndustryBlock = styled(StyledBaseContentBlock)`

`;
export const StyledPropertyManagerBlock = styled(StyledBaseContentBlock)`

`;
export const StyledSchoolBlock = styled(StyledBaseContentBlock)`

`;
export const StyledGovernmentBlock = styled(StyledBaseContentBlock)`

`;
export const StyledCorporateBlock = styled(StyledBaseContentBlock)`

`;