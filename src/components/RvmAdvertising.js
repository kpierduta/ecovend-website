import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const Container = styled.section`
  font-family: ${theme.primaryFontFamily};
  .container {
    padding-bottom: 6rem;
    border-bottom: 5px solid ${theme.secondaryColor};
  }
  .columns {
    margin-left: 0rem !important;
    margin-right: 0rem !important;
  }
  .text {
    margin-top: 7.5rem;
  }
  .title {
    color: #f26a16;
    margin-bottom: 0.5rem;
    color: ${theme.secondaryColor} !important;
    @media only screen and (max-width: 768px) {
      margin-top: 0rem;
    }
  }
  .subtitle {
    margin-top: 0.25rem !important;
    color: #f26a16;
    font-size: ${theme.fontSizeLarge};
    font-weight: 300;
    letter-spacing: 1.2px;
  }
  .is-size-5 {
    margin: 1.5rem 0rem 4rem 0rem;
  }
  video {
    width: 100%;
    height: 34.875rem;
    @media only screen and (max-width: 768px) {
      height: auto;
    }
  }
`;

class Rvm extends React.Component {
  render() {
    const { adv } = this.props;
    return (
      <Container className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h1 className="title is-3 is-capitalized text has-text-weight-light">
                large intergral
              </h1>
              <h1 className="title is-3 is-capitalized has-text-weight-light">
                audio-video screen and
              </h1>
              <h1 className="title is-3 is-capitalized has-text-weight-light">
                light box panels for
              </h1>
              <h1 className="title is-3 is-capitalized has-text-weight-medium">
                instanr revenue from
              </h1>
              <h1 className="title is-3 is-capitalized has-text-weight-medium">
                branding and
              </h1>
              <h1 className="title is-3 is-capitalized has-text-weight-medium">
                advertising
              </h1>
            </div>
            <div className="column has-text-right is-hidden-mobile">
              <img
                className="has-text-right"
                src={adv.heroImage.file.url}
                alt="vending machine"
              />
            </div>
            <div className="column has-text-centered is-hidden-tablet">
              <img
                className="has-text-centered"
                src={adv.heroImage.file.url}
                alt="vending machine"
              />
            </div>
          </div>
          <p className="is-size-6 has-text-centered">{adv.videoTitle}</p>
          <h1 className="is-size-5 has-text-weight-semibold has-text-centered">
            Click to view the video
          </h1>
          <div className="has-text-centered">
            <video controls autoplay="autoplay">
              <source src="/videos/TERMINATOR.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </Container>
    );
  }
}

export default Rvm;
