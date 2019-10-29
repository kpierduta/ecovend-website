import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';
import BreadCrumbs from './BreadCrumbs';

const Container = styled.section`
  font-family: ${theme.primaryFontFamily};
  .hero-body {
    padding: 3rem 0rem;
  }
  .title {
    font-size: ${theme.fontSizeMedium};
    padding-bottom: 1rem;
  }
  .subtitle {
    font-size: ${theme.fontSizeMedium};
  }
`;

const Advertising = () => (
  <Container>
    <div className="container">
      <BreadCrumbs undelinetext="Ad" simpletext="vertising" />
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Enjoy an additional revenue stream</h1>
            <h2 className="subtitle">
              Our Ecovend RVMs come with their own integrated advertising space
              with up to 55 inch audio-visual screens and light box panels on
              both sides of the machine to generate instant revenue from
              branding and advertising. As a leaseholder or owner of one of our
              RVM’s you’ll receive media training and an advertising starter
              pack to help you optimise and promote your advertising space and
              get you on your way to enjoying a new source of income.
            </h2>
          </div>
        </div>
      </section>
    </div>
  </Container>
);

export default Advertising;
