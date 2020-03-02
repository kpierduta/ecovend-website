import React from 'react';
import styled from 'styled-components';

import BreadCrumbs from './BreadCrumbs';

const Container = styled.section`
  font-family: ${props => props.theme.primaryFontFamily};
`;

const CaseStudyHero = () => (
  <Container className="section">
    <div className="container">
      <BreadCrumbs underlineText="Case" simpleText=" Studies" />
    </div>
  </Container>
);

export default CaseStudyHero;
