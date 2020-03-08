import React from 'react';
import styled from 'styled-components';

import Stepscard from './StepsCard';

const Section = styled.section`
  margin-bottom: 1rem;
  .columns {
    margin-left: 0rem !important;
    margin-right: 0rem !important;
  }
`;

class Steps extends React.Component {
  render() {
    const { home } = this.props;
    return (
      <Section className="section">
        <div className="container has-text-centered">
          <h1 className="title is-5 is-spaced has-text-primary">
            {home.stepTitle}
          </h1>
          <h5 className="subtitle is-6 has-text-primary para">
            {home.stepsSectionParagraph.internal.content}
          </h5>
          <div className="columns is-centered">
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
      </Section>
    );
  }
}

export default Steps;
