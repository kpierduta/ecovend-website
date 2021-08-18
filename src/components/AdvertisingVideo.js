import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  ul {
    list-style: disc;
  }

  .background {
    background-color: ${props => props.theme.lightBackground};
    padding-right: 0rem !important;
  }
  .second {
    padding: 0rem 0rem 0rem 1.5rem;
    text-align: right;
    @media only screen and (max-width: 1024px) and (min-width: 768px) {
      adding: 0rem;
      text-align: center;
    }
    img {
      object-fit: cover;
    }
  }
`;

const AdvertisingVideo = ({ adv }) => {
  return (
    <Container className="section">
      <div className="container">
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
                      <li key={items}>{items}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="column is-6 second">
                {adv.hasVideo && (
                  <video controls>
                    <source src={adv.video.file.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                {!adv.hasVideo && (
                  <figure className="image is-4by5">
                    <img
                      src={adv.advertisingImage.file.url}
                      alt={adv.advertisingImage.title}
                    />
                  </figure>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AdvertisingVideo;
