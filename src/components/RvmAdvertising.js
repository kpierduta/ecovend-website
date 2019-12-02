import React from 'react';
import styled from 'styled-components';

import ResultStep from './ResultStep';
import ResultCounter from './ResultCounter';

const Container = styled.section`
  .text {
    margin-top: 7.5rem;
  }

  .title {
    margin-bottom: 0.5rem;
    line-height: normal !important;
    @media only screen and (max-width: 768px) {
      margin-top: 0rem;
    }
  }
  .subtitle {
    margin-top: 0.25rem !important;
  }

  .is-size-5 {
    margin: 1.5rem 0rem 4rem 0rem;
  }

  video {
    padding-left: 5rem;
    height: auto;
    @media only screen and (max-width: 768px) {
      height: auto;
    }
  }

  img {
    height: auto;
    width: 70%;
  }
`;

const ContainerInner = styled.div`
  background-color: #eff2f3;
  padding: 3rem 3rem 0rem 2rem;
  justify-content: space-between;
  display: grid;
  .head {
    padding-bottom: 3rem;
  }
`;

const Bottom = styled.div`
  margin-top: 2rem;
  padding-bottom: 2rem;
`;
class Rvm extends React.Component {
  render() {
    const { adv } = this.props;
    return (
      <Container className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h3 className="title is-3 is-capitalized text has-text-weight-light has-text-danger">
                large intergral
              </h3>
              <h3 className="title is-3 is-capitalized has-text-weight-light has-text-danger">
                audio-video screen and
              </h3>
              <h3 className="title is-3 is-capitalized has-text-weight-light has-text-danger">
                light box panels for
              </h3>
              <h3 className="title is-3 is-capitalized has-text-weight-medium has-text-danger">
                instanr revenue from
              </h3>
              <h3 className="title is-3 is-capitalized has-text-weight-medium has-text-danger">
                branding and
              </h3>
              <h3 className="title is-3 is-capitalized has-text-weight-medium has-text-danger">
                advertising
              </h3>
            </div>
            <div className="column image has-text-right is-hidden-mobile">
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
          <div className="columns">
            <ContainerInner className="column is-7">
              <div>
                <h4 className="title is-4 head is-uppercase has-text-centered has-text-danger">
                  Audio-Visual enabled RVMS
                </h4>
                <h5 className="subtitle is-6 has-text-centered has-text-danger">
                  {adv.videoTitle}
                </h5>
              </div>
              <h4 className="is-size-4 has-text-weight-semibold has-text-centered">
                Click to view the video
              </h4>
              <div>
                <h4 className="title head is-4 has-text-centered has-text-danger">
                  Want something a bit different?
                </h4>
                <h5 className="subtitle is-6 has-text-centered has-text-danger">
                  We offer wrapping and branding options to suit your specific
                  requirements.
                </h5>
              </div>
            </ContainerInner>
            <div className="has-text-centered">
              <video controls autoPlay="autoplay">
                <source src="/videos/TERMINATOR.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <Bottom className="columns">
            <div className="column is-3">
              <ResultCounter text="1" />
              <ResultStep text="In May 2017, Brakes and ACM are finalist for the MRW National Recycling award for business partnership of the Year award" />
            </div>
            <div className="column is-3">
              <ResultCounter text="2" />
              <ResultStep text="In May 2017, Brakes and ACM are finalist for the MRW National Recycling award for business partnership of the Year award" />
            </div>
            <div className="column is-3">
              <ResultCounter text="3" />
              <ResultStep text="In May 2017, Brakes and ACM are finalist for the MRW National Recycling award for business partnership of the Year award" />
            </div>
            <div className="column is-3">
              <ResultCounter text="4" />
              <ResultStep text="In May 2017, Brakes and ACM are finalist for the MRW National Recycling award for business partnership of the Year award" />
            </div>
          </Bottom>
        </div>
      </Container>
    );
  }
}

export default Rvm;
