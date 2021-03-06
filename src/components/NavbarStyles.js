import styled from 'styled-components';

export const StyledNav = styled.nav`
  font-family: var(--ff-primary);
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  z-index: 200;
  background: var(--clr-concrete-white);
  /* override global img padding */
  img {
    padding: 0;
  }
  .nav-center {
    width: 100%;
    padding: 0 2rem;
    margin: 0 auto;
  }
  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    img {
      max-height: 3.5rem;
    }
  }
  .toggle-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary);
    cursor: pointer;
    transition: var(--transition);
    &:hover {
      color: var(--clr-bluesmoke-green);
    }
  }
  .nav-links {
    display: none;
  }
  .subtext {
    font-size: 1.25rem;
    font-style: italic;
    margin: 0;
    padding: 0;
    display: none;
  }
  @media screen and (min-width: 768px) {
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
    }
    .toggle-btn {
      display: none;
    }
    .nav-links {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
      li {
        display: contents;
      }
      a {
        text-transform: capitalize;
        color: var(--clr-red-2);
        font-weight: 900;
        letter-spacing: var(--spacing);
        transition: var(--transition);
        padding: 1.875rem 1rem;
        border-radius: 3px;
        font-size: 1.25rem;
        /* &[aria-current='page'] {
          p {
            border-bottom: 2px solid;
          }
          p.accent {
            border: inherit;
          }
        } */
        p {
          display: unset;
          margin: 0;
          padding: 0;
          color: inherit;
          transition: var(--transition);
          border-bottom: 2px solid rgba(0, 0, 0, 0);
          text-transform: uppercase;
          font-size: 1.4rem;
          font-weight: 500;
        }
        p.accent {
          padding: 5px 10px;
          color: var(--clr-concrete-white);
          background: var(--clr-red-2);
          border-radius: 5px;
          font-size: 1.25rem;
        }
        p.accent:hover {
          background: var(--clr-red-1);
        }
        &:hover {
          color: var(--clr-codgray-black);
          /* p {
            border-bottom: 2px solid;
          } */
        }
      }
    }
  }
  @media screen and (min-width: 1050px) {
    .subtext {
      display: block;
    }
  }
`;
