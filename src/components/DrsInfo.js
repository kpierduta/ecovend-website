import React from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Player from './Player';

const Section = styled.section`
  background-color: #ededed;
  margin-top: 1rem;
  padding-bottom: 2rem;

  .text {
    margin-top: 1rem;
  }
`;

const AnchorStyled = styled(AnchorLink)`
  background: transparent;
  border: none;
`;

class DrsInfo extends React.Component {
  render() {
    const { home } = this.props;

    return (
      <Section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-6">
              <Player
                src="/videos/ACM_Reverse_Vending_on_the_BBC.mp4"
                width="34.5rem"
              />
            </div>
            <div className="column">
              <h4 className="title is-4 is-capitalized">{home.orangeTitle}</h4>
              <h6 className="subtitle is-6 first">
                {home.orangeParagraph.internal.content}
              </h6>
              <h6 className="subtitle is-6 second">
                {' '}
                {home.orangeSecondPara.internal.content}
              </h6>
              <h6 className="subtitle is-6 second">
                {' '}
                {home.orangeThirdPara.internal.content}
              </h6>
              <AnchorStyled href="#contact" className="title is-5">
                <span className="has-text-danger">Get in Touch </span> to learn
                more
              </AnchorStyled>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default DrsInfo;
