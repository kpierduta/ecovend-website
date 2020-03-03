import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 4rem 0rem;
  background-color: ${props => props.background};
`;

const StatsCard = ({ title, subtitle, color }) => {
  let background;
  if (color == 'Orange') {
    background = '#F26F1E';
  } else if (color == 'Yellow Green') {
    background = '#c1c107';
  } else if (color == 'Light Green') {
    background = '#7fbd1a';
  } else if (color == 'Dark Green') {
    background = '#31a248';
  }

  return (
    <Container background={background}>
      <h4 className="title is-4 has-text-white">{title}</h4>
      <h3 className="subtitle is-3 has-text-white">{subtitle}</h3>
    </Container>
  );
};

export default StatsCard;
