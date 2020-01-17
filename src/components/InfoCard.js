import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-image: url(${props => props.background});
  background-size: 18rem;
  background-repeat: no-repeat;
  height: 25rem;
  .icon.is-large {
    height: 3rem;
    width: 3rem;
    font-size: 4rem;
    margin-top: 6rem;
  }
`;

const InfoCard = ({ background }) => (
  <Container className="column is-3 has-text-centered" background={background}>
    <span className="icon has-text-info is-large">
      <i className="fas fa-award" />
    </span>
  </Container>
);

export default InfoCard;
