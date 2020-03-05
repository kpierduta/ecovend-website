import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem 3rem;
  @media only screen and (max-width: 600px) {
    padding: 0rem;
  }

  ul {
    list-style: disc;
  }

  .background {
    background-color: ${props => props.theme.lightBackground};
  }
  .second {
    padding: 0rem 0rem 0rem 1.5rem;
    @media only screen and (max-width: 600px) {
      padding: 0rem;
    }
  }
`;

const AdvertisingVideo = ({ adv }) => (
  <Container className="section">
    <div className="container is-medium">
      <div className="columns is-centered">
        <div className="column is-11 background">
          <div className="columns">
            <div className="column is-6">
              <div className="section">
                <h4 className="title is-5 is-spaced is-uppercase">
                  {adv.videoTitle}
                </h4>
                <ul className="subtitle is-6">
                  {adv.advertisementPoints.map(items => (
                    <li>{items}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="column is-6 second">
              <video controls>
                <source src={adv.video.file.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default AdvertisingVideo;
