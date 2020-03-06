import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  transition: transform 0.2s;
  .card {
    background: transparent;
    border: 1px solid black;
    width: 100%;
  }
  img {
    margin-top: 0.5rem;
    height: 8rem;
  }
  :hover {
    transform: scale(1.05);
  }
`;

const ChooseCard = ({ data }) => (
  <StyledCard className="column is-4 has-text-centered is-flex">
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
