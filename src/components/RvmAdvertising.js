import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
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

const ContainerInner = styled.div`
  padding: 2rem 3rem;
  @media only screen and (max-width: 600px) {
    padding: 0rem;
  }
  .section {
    padding: 1.75rem 1.5rem;
  }
  .column.is-7 {
    background-color: ${props => props.theme.lightBackground};
  }
`;
class Rvm extends React.Component {
  render() {
    const { adv } = this.props;
    const { hero } = this.props;
    return (
      <Container className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-11 has-text-centered  background">
              <h3 className="title is-5 is-spaced is-capitalized  has-text-danger">
                {adv.heroTitle}
              </h3>
              <h3 className="subtitle is-6">{adv.heroSubtitle}</h3>
              <div className="columns">
                {hero.imageGrid.map(item => (
                  <div className="column is-3">
                    <img src={item.file.url} alt={item.file.title} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <ContainerInner>
            <div className="columns">
              <div className="column is-7">
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
              <div className="column second">
                <video controls>
                  <source src={adv.video.file.url} type="video/mp4" />
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
