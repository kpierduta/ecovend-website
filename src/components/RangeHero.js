import React from 'react';
import styled from 'styled-components';

import BreadCrumbs from './BreadCrumbs';

const Container = styled.section`
  font-family: ${props => props.theme.primaryFontFamily};
`;

const RangeHero = () => (
  <React.Fragment>
    <BreadCrumbs undelineText="Our" simpleText=" Range" />
    <Container className="section">
      <div className="container">
        <h6 className="subtitle is-6 Para">
          The Ecovend range encompasses a variety of RVM models to suit varying
          budgets and commercial requirements. Please feel free to get in touch
          if you have any questions regarding any of our products or wish to
          book a free no obligation RVM demo at our Hertfordshire headquarters.
        </h6>
        {/* <h6 className="subtitle is-6">
          Please feel free to get in touch if you have any questions regarding
          our machines or wish to book a free no obligation RVM demo at our
          Hertfordshire headquarters.
        </h6> */}
      </div>
    </Container>
  </React.Fragment>
);

export default RangeHero;
