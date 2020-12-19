import React from 'react';
import SocialLinks from '../constants/socialLinks';
import { StyledFooter } from './FooterStyles';

const Footer = () => (
  <StyledFooter>
    <SocialLinks />
    <p>&copy; {new Date().getFullYear()} VendVeri All rights reserved</p>
  </StyledFooter>
);

export default Footer;
