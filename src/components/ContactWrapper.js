import React from 'react';
import styled from 'styled-components';

import Contact from './Contact';
import MyMapComponent from './GoogleMap';

const Container = styled.section`
  position: relative;
`;

const ContactWrapper = () => (
  <Container className="section">
    <div className="container">
      <Contact />
      {/*
      <MyMapComponent isMarkerShown className="is-hidden-mobile" />
      */}
    </div>
  </Container>
);

export default ContactWrapper;
