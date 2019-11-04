import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const Container = styled.section``;

const StudyCard = props => (
  <Container className="section">
    <div className="container">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={props.image} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <h1 className="subtitle is-6 is-capitalized">Lorem ipsum dolor</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Phasellus nec iaculis mauris.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Phasellus nec iaculis
            mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris.
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default StudyCard;
