import React from 'react';
import styled from 'styled-components';

import BreadCrumbs from './BreadCrumbs';

const Container = styled.section``;

const ContactHero = () => (
  <Container className="section">
    <div className="container">
      <div className="columns">
        <div className="column">
          <BreadCrumbs undelinetext="CONTACT " simpletext="US" />
        </div>
      </div>
    </div>
  </Container>
);

export default ContactHero;
