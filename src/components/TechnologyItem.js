import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .box {
    height: 20rem;
  }
  .is-spaced {
    height: 3rem;
  }
`;

const TechnologyItem = ({ title }) => (
  <Container className="column is-4">
    <div className="box">
      <article className="media">
        <div className="media-content">
          <div className="content">
            <h1 className="title is-4 is-spaced">{title}</h1>
            <p className="subtitle is-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              efficitur sit amet massa fringilla egestas. Nullam condimentum
              luctus turpis.
            </p>
          </div>
        </div>
      </article>
    </div>
  </Container>
);

export default TechnologyItem;
