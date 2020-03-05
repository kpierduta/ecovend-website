import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  .bottom {
    margin-top: -3px;
  }
  img {
    margin-top: -0.5rem;
  }

  .circle {
    /* padding: 6rem 2rem 1rem 3.5rem; */
    background-image: url(/images/circle-icon.jpg);
    background-size: contain;
    background-repeat: no-repeat;
    height: 22rem;
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: Portrait) {
      height: 20rem;
      margin-left: 25%;
      margin-right: 25%;
    }
    @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (orientation: portrait) {
      margin: 0rem;
    }
  }
  /* .hero.is-large .hero-body {
    padding-top: 8rem !important;
  } */
  .text {
    padding: 8rem 3rem 8rem 3rem;
    @media only screen and (max-width: 1024px) {
      padding: 6rem 2.5rem 5rem 3rem;
    }
    @media (min-width: 768px) and (max-width: 1024px) and (orientation: Portrait) {
      padding: 5rem 4rem 0rem 4rem;
    }
    @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (orientation: portrait) {
      padding: 4rem;
    }
  }
`;

class Infographic extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <Container>
        <div className="section">
          <div className="container">
            <div className="columns">
              {data.infoGraphicsPoint.map(items => (
                <div className="column is-4 has-text-centered is-flex">
                  <div className="circle">
                    <div className="text">
                      <h1 className="subtitle is-5">{items}</h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="columns is-multiline is-gapless">
              {data.gallery.map(items => (
                <div className="column is-4">
                  <img src={items.file.url} alt={items.title} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </Container>
    );
  }
}

export default Infographic;
