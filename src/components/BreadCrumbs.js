import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  padding: 3rem 0.5rem;
  font-family: ${props => props.theme.primaryFontFamily};
  color: #e71018 !important;
  .text {
    padding: 0.25rem 0rem;
    border-bottom: 2px solid ${props => props.theme.hovercolor};
  }
`;

const BreadCrumbs = ({ underlineText, simpleText }) => (
  <Container className="section">
    <div className="container">
      <h1 className="is-size-4 has-text-weight-medium">
        <span className="text">{underlineText}</span>
        {simpleText}
      </h1>
    </div>
  </Container>
);

export default BreadCrumbs;
