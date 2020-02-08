import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  .card {
    min-height: 28rem;
    background: transparent;
    border: 1px solid black;
  }
  img {
    margin-top: 0.5rem;
    height: 8rem;
  }
`;

const ChooseCard = ({ data }) => (
  <StyledCard className="column is-4 has-text-centered">
    <div className="card">
      <div className="card-image">
        <img src={data.file.url} alt="/" />
      </div>
      <div className="card-content">
        <h5 className="subtitle is-5 has-text-weight-bold">{data.title}</h5>
        <p className="subtitle is-6">{data.description}</p>
      </div>
    </div>
  </StyledCard>
);

export default ChooseCard;
