import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const Container = styled.section`
  font-family: ${theme.primaryFontFamily};
  .text {
    padding: 0.25rem 0rem;
    border-bottom: 2px solid;
  }
  .Para {
    font-size: ${theme.fontSizeMedium};
    padding: 2rem 0rem 1rem 0rem;
  }
`;

const RangeHero = () => (
  <Container className="section">
    <div className="container">
      <h1 className="subtitle is-4">
        <span className="text">Our</span> range
      </h1>
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
