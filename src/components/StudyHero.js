import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import theme from '../utils/theme';
import Studycard from './Studycard';

import BreadCrumbs from './BreadCrumbs';

const Container = styled.section``;

const StudyHero = () => (
  <Container className="section">
    <div className="container">
      <BreadCrumbs undelinetext="Case" simpletext=" Studies" />
    </div>
    <div className="columns is-multiline is-mobile">
      <div className="column is-4">
        <Link to="/case-study">
          <Studycard image="/images/case/ceo.jpg" />
        </Link>
      </div>
      <div className="column is-4">
        <Link to="/case-study">
          <Studycard image="/images/case/factory.jpg" />
        </Link>
      </div>
      <div className="column is-4">
        <Link to="/case-study">
          <Studycard image="/images/case/user.jpg" />
        </Link>
      </div>
      <div className="column is-4">
        <Link to="/case-study">
          <Studycard image="/images/case/truck.jpg" />
        </Link>
      </div>
    </div>
  </Container>
);

export default StudyHero;
