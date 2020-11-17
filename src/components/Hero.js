import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.section`
  padding: 1rem 1.5rem;

  .title {
    font-size: 36px;
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
    width: 50%;
  }
`;

const MachineFeature = styled.div`
  color: ${props => props.theme.primaryColor};
  line-height: 1;
`;

class Hero extends React.Component {
  render() {
    const { home } = this.props;
    return (
      <Container className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h1 className="title is-capitalized has-text-primary">
                {home.title}
              </h1>
              <h5 className="subtitle is-size-4 has-text-primary">
                {home.subtitle}
              </h5>
              <MachineFeature className="is-6 subtitle">
                {home.machineFeatureFirst}
              </MachineFeature>
              <MachineFeature className="is-6 subtitle">
                {home.machineFeatureSecond}
              </MachineFeature>
              <MachineFeature className="is-6 subtitle">
                {home.machineFeatureThird}
              </MachineFeature>
              <Link to="/contact">
                <button
                  type="submit"
                  className="button is-medium is-primary"
                  style={{ marginTop: '0.5rem' }}
                >
                  <span className="has-text-weight-bold">Contact us now</span>
                </button>
              </Link>
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
