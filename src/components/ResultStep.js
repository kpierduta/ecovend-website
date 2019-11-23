import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 230px;
  width: 230px;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  border-radius: 50%;
  border: 5px solid ${props => props.theme.primaryColor};
  background: transparent;
  padding: 2rem 1.5rem 1rem 1.5rem;
`;

const ResultStep = ({ text }) => (
  <Wrapper className="has-text-weight-semibold">{text}</Wrapper>
);

export default ResultStep;
