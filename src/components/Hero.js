import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  .title {
    font-size: 72px;
    margin-top: 4rem;
    line-height: normal !important;
    @media only screen and (max-width: 768px) {
      margin-top: 0rem;
      font-size: 50px;
    }
  }

  .subtitle {
    margin-top: 0.25rem !important;
  }

  img {
    height: auto;
    width: 70%;
  }
`;

class Hero extends React.Component {
  render() {
    const { home } = this.props;
    return (
      <Container className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h1 className="title has-text-weight-normal is-capitalized has-text-primary">
                {home.title}
              </h1>
              <h5 className="subtitle is-size-5  has-text-primary">
                {home.subtitle}
              </h5>
            </div>
            <div className="column has-text-right is-hidden-mobile">
              <img
                className="has-text-right"
                src={home.headerimage.file.url}
                alt={home.headerimage.title}
              />
            </div>
            <div className="column has-text-centered is-hidden-tablet">
              <img
                className="has-text-centered"
                src={home.headerimage.file.url}
                alt={home.headerimage.title}
              />
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Hero;
