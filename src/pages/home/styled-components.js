import styled from 'styled-components';
export const StyledContentBlock = styled.section`
  background: ${({ background }) => {
    return background ? `url("${background}")` : 'var(--clr-concrete-white)';
  }};
  background-size: cover;
  color: ${({ color }) => {
    return color || 'inherit';
  }};
  box-shadow: var(--dark-shadow);
  & > div {
    display: flex;
    min-height: ${({ baseHeight }) => {
      return baseHeight ? `${baseHeight}vh` : '50vh';
    }};
    padding: 2rem;
    margin: 0 auto;
    max-width: var(--max-width);
    justify-content: center;
    flex-flow: column;
  }
  &:first-of-type {
    & > div {
      min-height: ${({ baseHeight }) => {
        return `calc(${baseHeight || '50'}vh - 5rem)`;
      }};
    }
  }
`;

export const StyledHeadingBlock = styled.div`
  h1,
  h2 {
    text-shadow: 1px 1px 4px #000;
  }
`;
