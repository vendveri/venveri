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
  --clr-dark-grey: #1d1d1d;
  --clr-codgray-black: #0d0d0d;
  --clr-paradiso-blue: #377d8c;
  --clr-fountain-blue: #50abbf;
  --clr-boston-blue: #4b9bb7;
  --clr-jungle-green: #26bf78;
  --clr-jewel-green: #168c49;
  --clr-red-1: #f2536f;
  --clr-red-2: #c42951;
  --clr-red-3: #a51d35;
  --clr-dark-blue: #1c3766;
  --clr-black-10: rgba(0, 0, 0, 0.1);
  --clr-black-20: rgba(0, 0, 0, 0.2);
  --clr-primary: var(--clr-boston-blue);
  --light-shadow: 0 5px 15px var(--clr-black-10);
  --dark-shadow: 0 5px 15px var(--clr-black-20);

  /* fonts */
  --ff-primary: 'Roboto', sans-serif;
  --ff-secondary: 'Open Sans', sans-serif;
  
  /* animation */
  --transition: all 0.3s linear;
  --delay-multiplier: .25;
  /* layout */
  --spacing: 0.1rem;
  --vertical-spacing: 4rem;
  --horizontal-spacing: 2rem;
  --radius: 0.5rem;
  --max-width: 1280px;
  --fixed-width: 700px;
}

/*
=============== 
Google Fonts
===============
*/
/* removing imports here due to browser warning */
/* https://i.imgur.com/Wm60cJY.png */

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
  font-family: var(--ff-primary);
  background: var(--clr-concrete-white);
  color: var(--clr-codgray-black);
  line-height: 1.5;
  /* set base font size to 14px */
  font-size: 1.4rem;
  font-weight: 300;
}

ul {
  list-style-type: none;
}

/* all paragraphs following a ul */
ul+p {
padding: 2rem 0;
}
a {
  text-decoration: none;
}

h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  line-height: 1.25;
  margin-bottom: var(--vertical-spacing);
  font-family: var(--ff-secondary);
  font-weight: 500;
}

h1 {
  font-size: 3.5rem;
}
h2 {
  font-size: 3rem;
}
h3 {
  font-size: 2.5rem;
}
h4 {
  font-size: 2rem;
}
p {
  margin-bottom: 1.25rem;
  color: var(--clr-grey-3);
  font-weight: 300;
  font-size: 2rem;
}
ul {
  font-weight: 300;
  font-size: 2rem;
}
img {
padding: 2rem 1rem
}
@media screen and (min-width: 800px) {
  h1 {
    font-size: 6rem;
  }
  h2 {
    font-size: 3rem;
  }
  h3 {
    font-size: 2.5rem;
  }
  h4 {
    font-size: 2rem;
  }
  p {
    margin-bottom: 1.5rem;
    color: var(--clr-grey-3);
    font-weight: 300;
    font-size: 2rem;
  }
  body {
    font-size: 1.4rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
    font-weight: 600;
    font-family: var(--ff-secondary);
  }
}

/* global classes */

.page {
  min-height: calc(100vh - 19rem);
  background: var(--clr-concrete-white);
}

/* button styles */
.btn {
  /* text-transform: uppercase; */
  background: var(--clr-red-2);
  color: var(--clr-concrete-white);
  padding: 1rem;
  letter-spacing: var(--spacing);
  display: inline-block;
  font-weight: 700;
  -webkit-transition: var(--transition);
  transition: var(--transition);
  font-size: 1.4rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: calc(var(--radius) * 3);
}
.btn:hover {
  /* color: var(--clr-primary-1); */
  background: var(--clr-red-1);
}

.center-btn {
  display: block;
  width: 12rem;
  text-align: center;
  margin: 0 auto;
  margin-top: 3rem;
}

/*
=============== 
Screen Readers (Accessibility)
===============
*/
.sr-only {
position:absolute;
left:-10000px;
top:auto;
width:1px;
height:1px;
overflow:hidden;
}
`;

export default GlobalStyles;
