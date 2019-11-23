import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
color:#ffff;
  height: 90px;
  width: 90px;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  border-radius: 50%;
  border: 5px solid ${props => props.theme.primaryColor};
  background-color:${props => props.theme.primaryColor} ;
  padding: 1.5rem 1.5rem 1rem 1.5rem;
  margin-left: 4rem;
  margin-bottom: 5rem;
  hr{
    margin-left: 1rem;
    margin-top:2rem;
    border: 2px solid ${props => props.theme.primaryColor};
    width: 0.1rem;
    height: 5.5rem;
}
  }
}
`;

const ResultCounter = ({ text }) => (
  <Wrapper className="has-text-weight-semibold is-block">
    {text}
    <hr />
  </Wrapper>
);

export default ResultCounter;
