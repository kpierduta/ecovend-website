import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const Container = styled.section`
  font-family: ${theme.primaryFontFamily};
`;

const CaseCard = props => (
  <Container className="section">
    <div className="container">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src="/images/machines/ecovend-machine_350.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <h1 className="subtitle is-6 is-capitalized">Lorem ipsum dolor</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{' '}
            <a href="#">#responsive</a>
            <br />
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default CaseCard;
