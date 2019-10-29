import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const Container = styled.h1`
  font-family: ${theme.primaryFontFamily};
  .text {
    padding: 0.25rem 0rem;
    border-bottom: 2px solid;
  }
`;

const BreadCrumbs = props => (
  <Container className="subtitle is-4">
    <span className="text">{props.undelinetext}</span>
    {props.simpletext}
  </Container>
);

export default BreadCrumbs;
