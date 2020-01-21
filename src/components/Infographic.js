import React from 'react';
import styled from 'styled-components';

import InfoCard from './InfoCard';

const Container = styled.section`
  .bottom {
    margin-top: -3px;
  }
`;

class Infographic extends React.Component {
  render() {
    const { advSteps } = this.props;
    return (
      <Container>
        <div className="section">
          <div className="container">
            <div className="columns is-variable is-0">
              <InfoCard background="/images/circles/one.jpg" />
              <InfoCard background="/images/circles/two.jpg" />
              <InfoCard background="/images/circles/three.jpg" />
              <InfoCard background="/images/circles/four.jpg" />
            </div>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="columns is-multiline is-gapless">
              <div className="column is-4">
                <img src="/images/advertisment-one.jpg" alt="#" />
              </div>
              <div className="column is-4">
                <img src="/images/ad-two.jpg" alt="#" />
              </div>
              <div className="column is-4">
                <img src="/images/Ad-three.jpg" alt="#" />
              </div>
              <div className="column is-4">
                <img
                  className="bottom"
                  src="/images/advertisment-four.jpg"
                  alt="#"
                />
              </div>
              <div className="column is-4">
                <img
                  className="bottom"
                  src="/images/advertisment-five.jpg"
                  alt="#"
                />
              </div>
              <div className="column is-4">
                <img
                  className="bottom"
                  src="/images/advertisment-six.jpg"
                  alt="#"
                />
              </div>
            </div>
          </div>
        </section>
      </Container>
    );
  }
}

export default Infographic;
