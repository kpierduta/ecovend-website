import React from 'react';
import styled from 'styled-components';

const Container = styled.h1`
  font-family: ${props => props.theme.primaryFontFamily};
  font-size: 1.5rem;
  color: ${props => props.theme.hovercolor}!important;
  .text {
    padding: 0.25rem 0rem;
    border-bottom: 2px solid;
  }
`;

const BreadCrumbs = ({ undelineText, simpleText }) => (
  <Container className="has-text-weight-medium">
    <span className="text">{undelineText}</span>
    {simpleText}
  </Container>
);

export default BreadCrumbs;
