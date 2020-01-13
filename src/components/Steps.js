import React from 'react';
import styled from 'styled-components';

import Stepscard from './StepsCard';
import IconCard from './IconCard';

const Container = styled.div`
  padding-bottom: 5rem;
  .columns {
    margin-left: 0rem !important;
    margin-right: 0rem !important;
  }
  .title.is-3 {
    padding-top: 8rem;
  }
  .para {
    padding: 1rem 0rem 4rem 0rem;
  }
`;

class Steps extends React.Component {
  render() {
    const { home } = this.props;
    return (
      <Container id="steps">
        <div className="columns is-centered ">
          <div className="column is-three-quarters">
            <div className="container">
              <div className="has-text-centered">
                <h1 className="title is-3 has-text-primary">
                  {home.stepTitle}
                </h1>
                <h5 className="subtitle is-6 has-text-primary para">
                  {home.stepsSectionParagraph.internal.content}
                </h5>
              </div>
            </div>
            <div className="columns is-centered is-variable is-6">
              <div className="column is-4">
                <Stepscard
                  link={home.stepOneIcon.file.url}
                  title={home.stepOneTitle}
                  description={home.stepOneText}
                />
              </div>
              <div className="column is-4">
                <Stepscard
                  link={home.stepTwoIcon.file.url}
                  title={home.stepTwoTitle}
                  description={home.stepTwoText}
                />
              </div>
              <div className="column is-4">
                <Stepscard
                  link={home.stepThreeIcon.file.url}
                  title={home.stepThreeTitle}
                  description={home.stepThreeText}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Steps;
