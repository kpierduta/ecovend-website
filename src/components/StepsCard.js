import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  box-shadow: none;
  .card-content {
    background-color: transparent;
    padding: 0rem;
  }
  img {
    height: 17rem;
  }
`;

const StepsCard = props => (
  <Container className="card  has-text-centered">
    <div className="card-image">
      <img className="is-rounded" src={props.link} alt={props.alt} />
    </div>
    <div className="card-content">
      <h3 className="subtitle is-5 has-text-primary">{props.title}</h3>
      <h4 className="subtitle is-5 has-text-primary">{props.description}</h4>
    </div>
  </Container>
);

export default StepsCard;
