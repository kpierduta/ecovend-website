import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import StudyCard from './StudyCard';

import BreadCrumbs from './BreadCrumbs';

const Container = styled.section``;

const StudyHero = ({ data }) => (
  <Container className="section">
    <div className="container">
      <BreadCrumbs underlineText="Case" simpleText=" Studies" />
      <div className="columns is-multiline">
        {data.map(items => (
          <div className="column is-4">
            <StudyCard data={items.node} />
          </div>
        ))}
      </div>
    </div>
  </Container>
);

export default StudyHero;
