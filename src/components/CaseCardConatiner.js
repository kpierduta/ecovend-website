import React from 'react';
import styled from 'styled-components';

const Conatiner = styled.div`
  margin-left: 1rem;
  padding: 4rem 0rem;
  background-color: ${props => props.background};
`;

const CaseCardConatiner = ({ title, subtitle, color }) => {
  let background;

  console.log(typeof color);
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
    <Conatiner className="column" background={background}>
      <h4 className="title is-4">{title}</h4>
      <h3 className="subtitle is-3">{subtitle}</h3>
    </Conatiner>
  );
};

export default CaseCardConatiner;
