import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  line-height: 34px;
  .para {
    padding: 2rem 0rem 0rem 0rem;
  }
  .has-text-orange {
    color: ${props => props.theme.secondaryColor};
  }
  .wrapper {
    margin-top: 1rem;
    padding: 1rem 0.5rem;
    background-color: ${props => props.theme.secondaryColor};
  }
`;

const Approach = ({ data }) => (
  <Container className="section">
    <div className="container">
      <div className="columns">
        <div className="column">
          <h1 className="subtitle is-4 comment has-text-orange">
            THE APPROACH
          </h1>
          <p className="para">{data.approachTitle}</p>
          <p className="para">{data.approachSubtitle.approachSubtitle}</p>
          <div className="wrapper">
            <p className="subtitle is-4 has-text-white">
              {data.approachOrangeText}
            </p>
          </div>
        </div>
        <div className="column">
          <h1 className="subtitle is-4 comment has-text-orange">
            THE SOLUTION
          </h1>
          <p className="para">
            {data.solutionFirstParagraph.solutionFirstParagraph}
          </p>
          <p className="para">
            {data.solutionSecondParagraph.solutionSecondParagraph}
          </p>
        </div>
      </div>
    </div>
  </Container>
);

export default Approach;
