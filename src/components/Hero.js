import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.section`
  padding: 1rem 1.5rem;

  .title {
    font-size: 30px;
    line-height: normal !important;
    @media only screen and (max-width: 768px) {
      margin-top: 0rem;
      font-size: 50px;
    }
  }

  .subtitle {
    margin-top: 0.25rem !important;
    font-weight: 900 !important;
  }

  img {
    height: auto;
    width: 42%;
  }
  .column:first-child {
    align-self: center;
  }
`;

const MachineFeature = styled.div`
  color: ${props => props.theme.primaryColor};
  line-height: 1 !important;
  font-weight: 900 !important;
  font-size: 17px;
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
              <MachineFeature className="subtitle">
                {home.machineFeatureFirst}
              </MachineFeature>
              <MachineFeature className="subtitle">
                {home.machineFeatureSecond}
              </MachineFeature>
              <MachineFeature className="subtitle">
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
            <div className="column has-text-centered is-hidden-mobile">
              <img
                className="has-text-centered"
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
