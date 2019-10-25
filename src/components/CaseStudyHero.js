import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const Container = styled.section`
  font-family: ${theme.primaryFontFamily};
`;

const CaseStudyHero = () => (
  <Container className="section">
    <div className="container">
      <h1 className="subtitle is-3">Case Study: Project Name</h1>
    </div>
  </Container>
);

export default CaseStudyHero;
