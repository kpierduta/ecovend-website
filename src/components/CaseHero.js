import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import theme from '../utils/theme';

import CaseCard from './CaseCard';

const Container = styled.section`
  font-family: ${theme.primaryFontFamily};
`;

const CaseHero = () => (
  <Container className="section">
    <div className="container">
      <h1 className="subtitle is-6 is-capitalized">
        <span className="icon">
          <i className="fas fa-home" />
        </span>
        /Pages/Case Study
      </h1>
      <div className="columns">
        <div className="column">
          <Link to="/case">
            <CaseCard />
          </Link>
        </div>
        <div className="column">
          <Link to="/case">
            <CaseCard />
          </Link>
        </div>
        <div className="column">
          <Link to="/case">
            <CaseCard />
          </Link>
        </div>
      </div>
    </div>
  </Container>
);

export default CaseHero;
