import React from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import theme from '../utils/theme';

const Container = styled.div`
  margin-top: 1rem;
  font-family: ${theme.primaryFontFamily};
  font-size: ${theme.fontSize} !important;
  background-color: #aabcbf;
  padding-bottom: 2rem;

  .columns {
    margin-left: 0rem !important;
    margin-right: 0rem !important;
  }
  .subtitle {
    margin: 3rem;
    font-weight: 500;
    line-height: 1.75;
  }
  .subtitle.is-5 {
    font-size: ${theme.fontSizeMedium} !important;
    font-weight: 500;
  }

  .text {
    font-weight: 400;
    letter-spacing: 1.1px;
    line-height: 2;
    margin-top: 1rem;
  }

  .para-two {
    padding-bottom: 4rem;
  }
`;

const LinkStyled = styled(AnchorLink)`
  font-family: ${theme.primaryFontFamily};
  background: transparent;
  border: none;
  font-size: ${theme.fontSize};
`;

const About = () => (
  <Container id="about" className="container">
    <section className="section">
      <div className=" has-text-centered">
        <h2 className="subtitle is-5 has-text-white">
          WHAT IS AN ECOVEND REVERSE VENDING MACHINE?
        </h2>
        <div className="columns is-centered">
          <div className="column is-three-quarters">
            <p className="has-text-white text">
              An Ecovend reverse vending machine or RVM is a recycling device
              with integrated technology that accepts used (empty) beverage
              containers in return for a monetary or non monetary reward – these
              can be for example vouchers, discounts or even charitable
              donations.
            </p>
            <p className="has-text-white text para-two">
              Our machines provide an automated function that collects, sorts,
              compacts and stores bottles and cans. This provides a simple and
              effective solution to beverage container waste.
            </p>
            <LinkStyled href="#contact" className="has-text-white">
              Contact
            </LinkStyled>
          </div>
        </div>
      </div>
    </section>
  </Container>
);

export default About;
