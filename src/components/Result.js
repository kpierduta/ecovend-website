import React from 'react';
import styled from 'styled-components';

import Content from './Content';

const Container = styled.section`
  font-family: ${props => props.theme.primaryFontFamily};
  .subtitle.is-2 {
    padding-top: 2rem;
    color: ${props => props.theme.secondaryColor};
  }
  img {
    width: 50%;
    height: 50%;
    float: right;
  }
`;

const Wrapper = styled.div`
  border-top: 4px solid ${props => props.theme.secondaryColor};
`;

const Result = ({ data }) => (
  <Container className="section">
    <div className="container">
      <Wrapper>
        <h1 className="subtitle is-2">Result</h1>

        <img src={data.resultImage.file.url} alt={data.resultImage.title} />

        <Content data={data.result.json} />
      </Wrapper>
    </div>
  </Container>
);

export default Result;
