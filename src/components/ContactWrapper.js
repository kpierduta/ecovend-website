import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';
import Contact from './Contact';
import MyMapComponent from './GoogleMap';

const Container = styled.section`
  position: relative;
  background-color: #e1eff2 !important;
  font-family: ${theme.primaryFontFamily} !important;
  .;
`;

const ContactWrapper = () => (
  <Container className="section">
    <div className="container">
      <Contact />
      <MyMapComponent isMarkerShown className="is-hidden-mobile" />
    </div>
  </Container>
);

export default ContactWrapper;
