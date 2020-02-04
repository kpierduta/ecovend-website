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

  ul {
    list-style: inside;
  }

  video {
    height: auto;
    @media only screen and (max-width: 768px) {
      height: auto;
    }
  }

  .column {
    padding: 0rem;
  }
  .second {
    padding: 0rem 0rem 0rem 1.5rem;
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
  padding: 2rem 4rem;
  .column.is-7 {
    background-color: ${props => props.theme.lightBackground};
  }
`;
class Rvm extends React.Component {
  render() {
    const { adv } = this.props;
    return (
      <Container className="section">
        <div className="container">
          {/* <div className="columns">
            <RvmType className="column">
              <h3 className="title is-3 is-capitalized has-text-weight-light has-text-danger">
                {adv.heroTitle}
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
          </div> */}
          <ContainerInner>
            <div className="columns">
              <div className="column is-7">
                <div className="section">
                  <h4 className="title is-4 is-spaced is-uppercase">
                    {adv.videoTitle}
                  </h4>
                  <ul className="subtitle is-6">
                    {adv.advertisementPoints.map(items => (
                      <li>{items}</li>
                    ))}
                  </ul>
                  <div>
                    <h4 className="title head is-4 is-spaced">
                      {adv.videoSecondTitle}
                    </h4>
                    <h5 className="subtitle is-6">{adv.videoParagraph}</h5>
                  </div>
                </div>
              </div>
              <div className="column second">
                <video controls autoPlay="autoplay">
                  <source src="/videos/TERMINATOR.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </ContainerInner>
        </div>
      </Container>
    );
  }
}

export default Rvm;
