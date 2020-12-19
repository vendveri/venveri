import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from '../styles/GlobalStyles';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import 'normalize.css';

let timeout;
const Layout = ({ children, location }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [pageActive, setPageActive] = useState('home');

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollHandler = () => {
    if (timeout) {
      window.cancelAnimationFrame(timeout);
    }
    timeout = window.requestAnimationFrame(() => {
      setScrollPosition(window.scrollY);
    });
  };
  useEffect(() => {
    setPageActive('home');
    setScrollPosition(window.scrollY);
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <>
      <GlobalStyles />
      <Navbar
        location={location}
        toggleSidebar={toggleSidebar}
        scrollPosition={scrollPosition}
        pageActive={pageActive}
        setPageActive={setPageActive}
      />
      <Sidebar
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
        pageActive={pageActive}
        setPageActive={setPageActive}
      />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
