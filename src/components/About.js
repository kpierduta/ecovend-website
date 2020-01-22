import React from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import firstVideo from '../../static/videos/Section 3 - RVM Sales Video.mp4';

import Player from './Player';

const Section = styled.section`
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

class About extends React.Component {
  render() {
    const { home } = this.props;
    return (
      <Section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-6">
              <h1 className="title is-4 is-capitalized">
                {home.greyBlockTitle}
              </h1>
              <h6 className="subtitle is-6 text">
                {home.greyBlockParagraph.internal.content}
              </h6>
              <h6 className="subtitle is-6 text sub-text">
                {home.greyBlockSecondPara.internal.content}
              </h6>
              <AnchorStyled href="#contact" className="title is-5">
                <span className="has-text-danger">Get in touch </span> to learn
                more
              </AnchorStyled>
            </div>
            <div className="column">
              <Player src={firstVideo} width="100%" play={true} />
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default About;
