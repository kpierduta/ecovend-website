import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  padding: 3rem 0.5rem;
  font-family: ${props => props.theme.primaryFontFamily};
  font-size: 1.5rem;
  color: #e71018 !important;
  .text {
    padding: 0.25rem 0rem;
    border-bottom: 2px solid;
  }
`;

const BreadCrumbs = ({ undelineText, simpleText }) => (
  <Container className="section">
    <div className="container">
      <h1 className="has-text-weight-medium">
        <span className="text">{undelineText}</span>
        {simpleText}
      </h1>
    </div>
  </Container>
);

export default BreadCrumbs;
