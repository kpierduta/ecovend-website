import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import theme from '../utils/theme';
import BreadCrumbs from './BreadCrumbs';
import CaseCard from './CaseCard';

const Container = styled.section`
  font-family: ${theme.primaryFontFamily};
`;

const CaseHero = () => (
  <Container className="section">
    <div className="container">
      <BreadCrumbs undelinetext="Case" simpletext=" Studies" />
      <div className="columns">
        <div className="column">
          <Link to="/case">
            <CaseCard image="/images/case/truck.png" />
          </Link>
        </div>
        <div className="column">
          <Link to="/case">
            <CaseCard image="/images/case/ceo.png" />
          </Link>
        </div>
        <div className="column">
          <Link to="/case">
            <CaseCard image="/images/case/cardboard.png" />
          </Link>
        </div>
      </div>
    </div>
  </Container>
);

export default CaseHero;
