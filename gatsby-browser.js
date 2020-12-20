import { wrapLayout } from './root-layout';
// using page instead of root - https://github.com/styled-components/styled-components/issues/3004
export const wrapPageElement = wrapLayout;

export const onRouteUpdate = ({ location }) => {
  const { pathname, hash } = location;
  switch (pathname) {
    case '/contact':
      document.querySelector('#contact-page').classList.add('accent');
      document.querySelector('#industries-page').classList.remove('accent');
      document.querySelector('#home-page').classList.remove('accent');
      break;
    case '/':
      if (hash === '#industries') {
        document.querySelector('#industries-page').classList.add('accent');
        document.querySelector('#home-page').classList.remove('accent');
        document.querySelector('#contact-page').classList.remove('accent');
      } else {
        document.querySelector('#home-page').classList.add('accent');
        document.querySelector('#industries-page').classList.remove('accent');
        document.querySelector('#contact-page').classList.remove('accent');
      }
      break;
    default:
      document.querySelector('#industries-page').classList.remove('accent');
      document.querySelector('#home-page').classList.remove('accent');
      document.querySelector('#contact-page').classList.remove('accent');
  }
};
