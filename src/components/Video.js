import React from 'react';
import styled from 'styled-components';

import Player from './Player';
import firstVideo from '../../static/videos/Section 3 - RVM Sales Video.mp4';

const Section = styled.section`
  .test {
    background: black;
  }
  video {
    width: 61.3125rem;
    height: 25rem;
    @media only screen and (max-width: 768px) {
      height: auto;
    }
  }
  .button {
    border-radius: 3rem;
    margin-top: -1.5rem;
    border: 1px solid ${props => props.theme.primaryColor};
    background-color: #fff !important;
    color: #fff !important;
    :hover {
      opacity: 1 !important;
    }
  }
`;

class Video extends React.Component {
  render() {
    const { home } = this.props;
    return (
      <Section className="section has-text-centered">
        <div className="container">
          <div className="test">
            {/* <iframe
            width="560"
            height="415"
            className="video"
            src={firstVideo}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          /> */}
            <video width="560" height="615" controls>
              <source src={firstVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </Section>
    );
  }
}

export default Video;
