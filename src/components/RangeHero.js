import React from 'react';
import styled from 'styled-components';

import BreadCrumbs from './BreadCrumbs';

const Container = styled.section`
  font-family: ${props => props.theme.primaryFontFamily};
`;

const RangeHero = ({ subtitle }) => (
  <React.Fragment>
    <BreadCrumbs underlineText="Our" simpleText=" Range" />
    <Container className="section">
      <div className="container">
        <h6 className="subtitle is-6">{subtitle}</h6>
      </div>
    </Container>
  </React.Fragment>
);

export default RangeHero;
