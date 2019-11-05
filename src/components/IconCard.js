import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const Container = styled.div`
  font-family: ${theme.primaryFontFamily};
  margin: 1rem 0rem;
  .card {
    height: 15rem;
    width: 100% @media only screen and (max-width: 768px) {
      height: auto;
      width: auto;
    }
  }
  img {
    height: 13rem;
  }
  :last-child {
    height: 100%;
  }
`;

const Iconcard = props => (
  <Container className="has-text-centered">
    <div className="card">
      <div className="card-content">
        <div className="has-text-centered">
          <img src={props.Link} alt={props.alt} />
        </div>
      </div>
    </div>
  </Container>
);

export default Iconcard;
