import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  .title {
    margin-bottom: 0.5rem;
    line-height: normal !important;
    @media only screen and (max-width: 768px) {
      margin-top: 0rem;
    }
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

const RvmType = styled.div`
  padding: 0rem 29rem 0rem 0rem;
  padding-bottom: 10rem;
  @media only screen and (max-width: 768px) {
    padding: 0;
  }
`;

const ContainerInner = styled.div`
  background-color: ${props => props.theme.lightBackground};
  .head {
    padding: 3rem;
  }
`;
class Rvm extends React.Component {
  render() {
    const { adv } = this.props;
    return (
      <Container className="section">
        <div className="container">
          <div className="columns">
            <RvmType className="column">
              <h3 className="title is-3 is-capitalized has-text-weight-light has-text-danger">
                {adv.sideTitle}
              </h3>
            </RvmType>
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
                  {adv.visualTitle}
                </h4>
                <h5 className="subtitle is-6 has-text-centered has-text-danger">
                  {adv.videoTitle}
                </h5>
              </div>
              <div>
                <h4 className="title head is-4 has-text-centered has-text-danger">
                  {adv.visualSubtitle}
                </h4>
                <h5 className="subtitle is-6 has-text-centered has-text-danger">
                  {adv.visualParagraph}
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
        </div>
      </Container>
    );
  }
}

export default Rvm;
