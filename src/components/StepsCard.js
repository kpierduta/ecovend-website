import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 1rem 0rem;
  @media only screen and (max-width: 768px) {
    padding-top: 2rem;
  }
  .card {
    height: 15rem;
    width: 100%;
    @media only screen and (max-width: 768px) {
      height: 15rem;
      width: 100%;
    }
  }

  .card-content {
    padding-top: 3.5rem;
    @media only screen and (max-width: 768px) {
      padding: 5rem 2rem 0rem 1rem;
    }
  }

  .card-para {
    font-weight: 400;
    color: ${props => props.theme.primaryColor};
  }
`;

const StepsCard = ({ title, description }) => (
  <Container className="has-text-centered">
    <div className="card">
      <div className="card-content">
        <div className="has-text-centered">
          <h3 className="subtitle is-6 card-para">{title}</h3>
          <h4 className="subtitle is-6 card-para">{description}</h4>
        </div>
      </div>
    </div>
  </Container>
);

export default StepsCard;
