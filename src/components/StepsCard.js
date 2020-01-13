import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  box-shadow: none;
  img {
    border: 2px solid ${props => props.theme.secondaryColor};
  }
  .image.is-128x128 {
    margin-left: 5rem;
  }
`;

const StepsCard = props => (
  <Container className="card">
    <div className="card-image">
      <figure className="image is-128x128">
        <img className="is-rounded" src={props.link} alt={props.alt} />
      </figure>
    </div>
    <div className="card-content has-text-centered">
      <h3 className="subtitle is-5 has-text-primary">{props.title}</h3>
      <h4 className="subtitle is-6 has-text-primary">{props.description}</h4>
    </div>
  </Container>
);

export default StepsCard;
