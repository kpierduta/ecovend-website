import React from 'react';
import styled from 'styled-components';

import Stepscard from './StepsCard';
import IconCard from './IconCard';

const Container = styled.div`
  background-color: #f1f1f1;
  font-family: ${props => props.theme.primaryFontFamily};
  padding-bottom: 5rem;
  .columns {
    margin-left: 0rem !important;
    margin-right: 0rem !important;
  }
  .title.is-3 {
    color: ${props => props.theme.primaryColor};
    padding-top: 8rem;
  }

  .para {
    padding: 1rem 0rem 8rem 0rem;
    color: ${props => props.theme.primaryColor};
  }

  .rev {
    @media only screen and (max-width: 768px) {
      flex-direction: column-reverse;
      display: flex;
    }
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
                <h1 className="title is-3 heading">{home.stepTitle}</h1>
                <h5 className="subtitle is-6 para">
                  {home.stepsSectionParagraph.internal.content}
                </h5>
              </div>
            </div>
            <div className="columns is-centered is-variable is-6">
              <div className="column rev is-4">
                <IconCard Link={home.stepOneIcon.file.url} />
                <Stepscard
                  title={home.stepOneTitle}
                  description={home.stepOneText}
                />
              </div>
              <div className="column is-4">
                <Stepscard
                  title={home.stepTwoTitle}
                  description={home.stepTwoText}
                />
                <IconCard Link={home.stepTwoIcon.file.url} />
              </div>
              <div className="column rev is-4">
                <IconCard Link={home.stepThreeIcon.file.url} />
                <Stepscard
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
