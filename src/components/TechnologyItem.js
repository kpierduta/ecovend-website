import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .box {
    height: 17rem;
  }
  .is-spaced {
    height: 2rem;
  }
`;

const TechnologyItem = ({ title, subtitle }) => (
  <Container className="column is-4">
    <div className="box">
      <article className="media">
        <div className="media-content">
          <div className="content">
            <h1 className="title is-5 is-spaced">{title}</h1>
            <p className="subtitle is-6">{subtitle}</p>
          </div>
        </div>
      </article>
    </div>
  </Container>
);

export default TechnologyItem;
