import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

import BreadCrumbs from './BreadCrumbs';

const Container = styled.section`
  font-family: ${theme.primaryFontFamily};
`;

const CaseStudyHero = () => (
  <Container className="section">
    <div className="container">
      <BreadCrumbs undelinetext="Case" simpletext=" Studies" />
    </div>
  </Container>
);

export default CaseStudyHero;
