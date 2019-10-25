import React from 'react';
import styled from 'styled-components';

import FaqItem from './FaqItem';

const Container = styled.div`
  .title {
    margin-bottom: 4rem;
  }
`;

const CardWrapper = styled.div`
  margin: 2rem 0rem;
`;

const FaqSection = () => (
  <Container className="section">
    <div className="Container">
      <div className="has-text-centered">
        <h2 className="title is-2">Frequently Asked Questions</h2>
      </div>
      <div className="columns is-centered">
        <div className="column is-two-thirds">
          <CardWrapper>
            <FaqItem questions="What information do i need to supply to you to start my project ?" />
          </CardWrapper>
          <CardWrapper>
            <FaqItem questions="What information do i need to supply to you to start my project ?" />
          </CardWrapper>
          <CardWrapper>
            <FaqItem questions="What information do i need to supply to you to start my project ?" />
          </CardWrapper>
          <CardWrapper>
            <FaqItem questions="What information do i need to supply to you to start my project ?" />
          </CardWrapper>
        </div>
      </div>
    </div>
  </Container>
);

export default FaqSection;
