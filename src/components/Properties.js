import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const Container = styled.div`
  font-family: ${theme.primaryFontFamily};
  font-size: ${theme.fontSizeMedium};
  margin-bottom: 0.75rem !important;
  padding: 0.25rem 0rem 0rem 0rem !important;
  .subtitle {
    font-size: ${theme.fontSizeMedium};
    color: ${theme.secondaryColor};
    padding-right: 1rem;
    line-height: unset;
    margin-bottom: 0px;
  }
`;

const Properties = props => (
  <Container className="columns is-gapless">
    <div className="column is-3">
      <h1 className="subtitle">{props.value}</h1>
    </div>
    <div className="column">
      <p>{props.description}</p>
    </div>
  </Container>
);

export default Properties;
