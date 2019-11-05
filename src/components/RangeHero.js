import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

import BreadCrumbs from './BreadCrumbs';

const Container = styled.section`
  font-family: ${theme.primaryFontFamily};
  .Para {
    font-size: ${theme.fontSizeMedium};
    padding: 2rem 0rem 1rem 0rem;
  }
`;

const RangeHero = () => (
  <Container className="section">
    <div className="container">
      <BreadCrumbs undelineText="Our" simpleText=" Range" />
      <p className="Para">
        The Ecovend range encompasses a variety of RVM models to suit your
        budget and commercial requirements. You can find our machine specifics
        below.
      </p>
      <p>
        Please feel free to get in touch if you have any questions regarding our
        machines or wish to book a free no obligation RVM demo at our
        Hertfordshire headquarters.
      </p>
    </div>
  </Container>
);

export default RangeHero;
