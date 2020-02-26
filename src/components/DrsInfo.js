import React from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Player from './Player';

const Section = styled.section`
  background-color: #ededed;
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
                play={false}
                src={home.secondVideo.file.url}
                width="100%"
              />
            </div>
            <div className="column">
              <h4 className="title is-5 is-capitalized">
                {home.bbcSectionTitle}
              </h4>
              <h6 className="subtitle is-6 first">{home.newsSubtitle}</h6>
              <h6 className="subtitle is-6 second"> {home.firstPara}</h6>
              <h6 className="subtitle is-6 second"> {home.secondPara}</h6>
              <AnchorStyled href="#contact" className="title is-5">
                <span className="has-text-danger">Get in touch </span> to learn
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
