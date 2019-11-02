import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';
import BreadCrumbs from './BreadCrumbs';
import FaqItem from './FaqItem';

const Container = styled.div`
  font-family: ${theme.primaryFontFamily}!important;
  .title {
    margin-bottom: 6rem;
    font-size: 40px !important;
  }
`;

const CardWrapper = styled.div`
  margin: 2rem 0rem;
  :first-child {
    margin-top: 6rem;
  }
`;

const FaqSection = () => (
  <Container className="section">
    <div className="Container">
      <div className="columns is-centered">
        <BreadCrumbs undelinetext="FAQ" />
        <div className="column is-four-fifths">
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
