import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const Container = styled.section`
  font-family: ${theme.primaryFontFamily};
  .columns {
    margin-left: 0rem !important;
    margin-right: 0rem !important;
  }
  .title {
    color: #f26a16;
    font-size: 72px;
    font-weight: 400;
    margin-top: 4rem;
    @media only screen and (max-width: 768px) {
      margin-top: 0rem;
      font-size: 50px;
    }
  }
  .subtitle {
    margin-top: 0.25rem !important;
    color: #f26a16;
    font-size: ${theme.fontSizeLarge};
    font-weight: 300;
    letter-spacing: 1.2px;
  }
`;

const Hero = () => (
  <Container className="section">
    <div className="container">
      <div className="columns">
        <div className="column">
          <h1 className="title is-capitalized">ECOVEND REVERSE VENDING</h1>
          <h5 className="subtitle">
            Welcome to the next generation of recycling
          </h5>
        </div>
        <div className="column has-text-right is-hidden-mobile">
          <img
            className="has-text-right"
            src="/images/hero.jpg"
            alt="vending machine"
          />
        </div>
        <div className="column has-text-centered is-hidden-tablet">
          <img
            className="has-text-centered"
            src="/images/hero.jpg"
            alt="vending machine"
          />
        </div>
      </div>
    </div>
  </Container>
);

export default Hero;
