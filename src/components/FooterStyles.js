import styled from 'styled-components';

export const StyledFooter = styled.footer`
  height: 7rem;
  text-align: center;
  background: var(--clr-dark-grey);
  display: grid;
  place-items: center;

  ul {
    display: flex;
    justify-content: center;
    line-height: 1;
    margin-bottom: 0.5rem;
  }
  li {
    transition: var(--transition);
    &:hover {
      transform: translateY(-10%);
    }
  }
  a {
    font-size: 2rem;
    margin: 0 0.5rem;
    transition: var(--transition);
    color: var(--clr-concrete-white);
  }
  a:hover {
    color: var(--clr-red-1);
  }
  p {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    color: var(--clr-concrete-white);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
  }
`;
