import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .card {
    min-height: 25rem;
    background: url(${props => props.background});
    background-size: cover;
    background-size: 100% 100%;
    box-shadow: none;
    background-repeat: no-repeat;
  }
  .card-content {
    padding: 2rem 3rem 2rem 1.2rem;
  }
  .icon {
    font-size: 3rem;
    padding: 4rem 0rem 4rem 0rem;
  }
`;

const InfoCard = ({ data, background }) => (
  <Container
    className="column is-3 has-text-centered"
    background={data.file.url}
  >
    <div className="card">
      <div className="card-content">
        <span className="icon">
          <i className="fas fa-search" />
        </span>
        <h1 className="subtitle is-6">{data.description}</h1>
      </div>
    </div>
  </Container>
);

export default InfoCard;
