import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  .bottom {
    margin-top: -3px;
  }
  img {
    margin-top: -0.5rem;
  }

  .column.is-4.is-flex {
    height: 24rem;
  }
  .circle {
    /* padding: 6rem 2rem 1rem 3.5rem; */
    background-image: url(/images/circle-icon.jpg);
    background-size: contain;
    background-repeat: no-repeat;
  }
  /* .hero.is-large .hero-body {
    padding-top: 8rem !important;
  } */
  .hero-body {
    padding: 8rem 2.5rem;
    @media only screen and (max-width: 1024px) {
      padding: 6.5rem 2.5rem;
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
                    <section className="hero">
                      <div className="hero-body">
                        <div className="container">
                          <h1 className="subtitle is-5">{items}</h1>
                        </div>
                      </div>
                    </section>
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
