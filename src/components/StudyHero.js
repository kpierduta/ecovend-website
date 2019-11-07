import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import StudyCard from './StudyCard';

import BreadCrumbs from './BreadCrumbs';

const Container = styled.section``;

const StudyHero = () => (
  <Container className="section">
    <div className="container">
      <BreadCrumbs undelineText="Case" simpleText="Studies" />
      <div className="columns is-multiline is-mobile">
        <div className="column is-4">
          <Link to="/case-study">
            <StudyCard image="/images/case/ceo.jpg" />
          </Link>
        </div>
        <div className="column is-4">
          <Link to="/case-study">
            <StudyCard image="/images/case/factory.jpg" />
          </Link>
        </div>
        <div className="column is-4">
          <Link to="/case-study">
            <StudyCard image="/images/case/user.jpg" />
          </Link>
        </div>
        <div className="column is-4">
          <Link to="/case-study">
            <StudyCard image="/images/case/truck.jpg" />
          </Link>
        </div>
      </div>
    </div>
  </Container>
);

export default StudyHero;
