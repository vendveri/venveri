import styled from 'styled-components';

export const StyledContactPage = styled.section`
  display: grid;
  place-items: center;
  min-height: calc(100vh - 12rem);
  background-color: rgba(255, 0, 0, 0.5);
  background: ${({ background }) => background || 'var(--clr-red-2)'};
  background-size: cover;
  background-position: center;
  article {
    margin: 2rem;
    background: var(--clr-concrete-white);
    border-radius: var(--radius);
    text-align: center;
    box-shadow: var(--light-shadow);
    transition: var(--transition);
    width: 90vw;
    max-width: var(--max-width);
    &:hover {
      box-shadow: var(--dark-shadow);
    }

    h3 {
      padding-top: 1.25rem;
      color: var(--clr-primary);
    }
    .form-group {
      padding: 1rem 1.5rem;
      /* display: flex;
      flex-flow: row wrap;
      gap: 2rem;
      align-items: center;
      justify-content: center; */
    }
    .form-control {
      display: block;
      width: 100%;
      padding: 0.75rem 1rem;
      border: none;
      margin-bottom: 1.25rem;
      background: var(clr-codgray-black);
      /* background: red; */
      border-radius: var(--radius);
      text-transform: uppercase;
      letter-spacing: var(--spacing);
      &::placeholder {
        font-family: var(--ff-primary);
        color: var(--clr-paradiso-blue);
        text-transform: uppercase;
        letter-spacing: var(--spacing);
      }
    }
    textarea {
      resize: vertical;
    }
    .submit-btn {
      display: block;
      width: 100%;
      padding: 1rem;
      border-bottom-left-radius: var(--radius);
      border-bottom-right-radius: var(--radius);
      border-top-right-radius: 0;
      border-top-left-radius: 0;
      background: var(--clr-dark-blue);
    }
  }
`;
