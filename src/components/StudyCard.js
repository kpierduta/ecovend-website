import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 3rem;
`;

const StudyCard = ({ imageTag }) => (
  <Container className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img src={imageTag} alt="Placeholder" />
      </figure>
    </div>
    <div className="card-content">
      <div className="content">
        <h1 className="subtitle is-6 is-capitalized">Lorem ipsum dolor</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus nec iaculis mauris.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Phasellus nec iaculis mauris.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
      </div>
    </div>
  </Container>
);

export default StudyCard;