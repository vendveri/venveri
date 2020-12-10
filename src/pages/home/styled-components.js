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
export const StyledProtectBlock = styled(StyledBaseContentBlock)`

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