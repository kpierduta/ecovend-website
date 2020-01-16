import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-image: url(${props => props.background});
  background-size: contain;
  background-repeat: no-repeat;
  height: 25rem;
`;

const InfoCard = ({ background }) => (
  <Container className="column is-3" background={background}>
    <h1>
      In May 2017, Brakes and ACM are finalist for the MRW National Recycling
      award for business partnership of the Year award
    </h1>
  </Container>
);

export default InfoCard;
