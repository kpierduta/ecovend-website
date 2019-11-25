import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: ${props => props.theme.primaryFontFamily};
  font-size: ${props => props.theme.fontSizeMedium};
  margin-bottom: 0.75rem !important;
  padding: 0.25rem 0rem 0rem 0rem !important;
`;

const Properties = props => (
  <Container className="columns is-gapless">
    <div className="column is-4">
      <h1 className="subtitle is-5">{props.value}</h1>
    </div>
    <div className="column">
      <p className="subtitle is-6">{props.description}</p>
    </div>
  </Container>
);

export default Properties;
