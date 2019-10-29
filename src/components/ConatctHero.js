import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const Container = styled.section`
  .subtitle {
    margin-bottom: 4rem;
    letter-spacing: 0.2rem;
  }
`;

const ContactHero = () => (
  <Container className="section">
    <div className="container">
      <div className="columns">
        <div className="column">
          <h1 className="subtitle is-6 is-capitalized">
            <span className="icon">
              <i className="fas fa-home" />
            </span>
            /Pages/Conatact us
          </h1>
          <h1 className="title is-3">CONTACT US</h1>
        </div>
      </div>
    </div>
  </Container>
);

export default ContactHero;
