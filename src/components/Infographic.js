import React from 'react';
import styled from 'styled-components';

import InfoCard from './InfoCard';

const Container = styled.section``;

class Infographic extends React.Component {
  render() {
    const { advSteps } = this.props;
    return (
      <Container className="section">
        <div className="container">
          <div className="columns is-gapless">
            <InfoCard background="/images/circles/one.png" />
            <InfoCard background="/images/circles/two.png" />
            <InfoCard background="/images/circles/three.png" />
            <InfoCard background="/images/circles/four.png" />
          </div>
        </div>
      </Container>
    );
  }
}

export default Infographic;
