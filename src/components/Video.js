import React from 'react';
import styled from 'styled-components';

import firstVideo from '../../static/videos/Section 3 - RVM Sales Video.mp4';

const Conatiner = styled.div`
  font-family: ${props => props.theme.primaryFontFamily};
  padding-bottom: 1rem;

  .title {
    color: ${props => props.theme.primaryColor};
    font-weight: 400;
  }
  video {
    width: 61.3125rem;
    height: 31.1rem;
    @media only screen and (max-width: 768px) {
      height: auto;
    }
  }
`;

class Video extends React.Component {
  render() {
    const { home } = this.props;
    return (
      <Conatiner className="container">
        <section className="section has-text-centered">
          <h1 className="title is-3 is-capitalized">{home.videoTitle}</h1>
          {/* <iframe
            width="560"
            height="415"
            className="video"
            src={firstVideo}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          /> */}
          <video width="560" height="615" controls autoplay="autoplay">
            <source src={firstVideo} type="video/mp4" />
          </video>
        </section>
      </Conatiner>
    );
  }
}

export default Video;
