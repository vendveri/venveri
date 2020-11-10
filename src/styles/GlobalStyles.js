import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
/*
=============== 
Variables
===============
*/

:root {
  /* colors */
  --clr-nador-green: #4d5955;
  --clr-pewter-green: #8fa69b;
  --clr-bluesmoke-green: #798c83;
  --clr-concrete-white: #f2f2f2;
  --clr-codgray-black: #0d0d0d;
  --clr-paradiso-blue: #377d8c;
  --clr-fountain-blue: #50abbf;
  --clr-boston-blue: #4b9bb7;
  --clr-jungle-green: #26bf78;
  --clr-jewel-green: #168c49;
  --clr-primary: var(--clr-boston-blue);
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  /* fonts */
  --ff-primary: 'Roboto', sans-serif;
  --ff-secondary: 'Open Sans', sans-serif;

  /* animation */
  --transition: all 0.3s linear;
  --delay-multiplier: .25;
  /* layout */
  --spacing: 0.1rem;
  --radius: 0.25rem;
  --max-width: 1170px;
  --fixed-width: 700px;
}

/*
=============== 
Global Styles
===============
*/

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  /* 1 rem === 10px */
  font-size: 62.5%;
}

body {
  font-family: var(--ff-secondary);
  background: var(--clr-concrete-white);
  color: var(--clr-codgray-black);
  line-height: 1.5;
  /* set base font size to 14px */
  font-size: 1.4rem;
}

main {
  margin-top: 7rem;
}

ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}

h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 1.2rem;
  font-family: var(--ff-primary);
}

h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 0.875rem;
}
p {
  margin-bottom: 1.25rem;
  color: var(--clr-grey-3);
}
@media screen and (min-width: 800px) {
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1rem;
  }
  body {
    font-size: 1.4rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}

/* global classes */

.page {
  min-height: calc(100vh - 2rem);
  background: var(--clr-concrete-white);
}

/* button styles */
.btn {
  text-transform: uppercase;
  background: var(--clr-jewel-green);
  color: var(--clr-concrete-white);
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  display: inline-block;
  font-weight: 700;
  -webkit-transition: var(--transition);
  transition: var(--transition);
  font-size: 0.875rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
}
.btn:hover {
  /* color: var(--clr-primary-1); */
  background: var(--clr-bluesmoke-green);
}
.center-btn {
  display: block;
  width: 12rem;
  text-align: center;
  margin: 0 auto;
  margin-top: 3rem;
}
`;

export default GlobalStyles;
