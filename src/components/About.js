import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Player from './Player';

const Section = styled.section`
  margin-top: 1rem;
`;

const AnchorStyled = styled(Link)`
  margin-top: 2rem;
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
              <h1 className="title is-5 is-capitalized is-spaced">
                {home.sectionTitle}
              </h1>
              <h6 className="subtitle is-6">
                {home.sectionFirstSubtitle.sectionFirstSubtitle}
              </h6>
              <h6 className="subtitle is-6">{home.sectionSecondSubtitle}</h6>
              <AnchorStyled to="/contact" className="title is-5">
                <span className="has-text-danger">Get in touch </span> to learn
                more
              </AnchorStyled>
            </div>
            <div className="column">
              <Player
                play
                src={home.firstVideo.file.url}
                width="100%"
                poster="images/thumbnail.jpg"
              />
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default About;
