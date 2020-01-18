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
          <div className="columns is-variable is-0">
            <InfoCard background="/images/circles/one.jpg" />
            <InfoCard background="/images/circles/two.jpg" />
            <InfoCard background="/images/circles/three.jpg" />
            <InfoCard background="/images/circles/four.jpg" />
          </div>
        </div>
      </Container>
    );
  }
}

export default Infographic;
