import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.div`
  margin-top: 3rem;
`;

const StudyCard = ({ data }) => (
  <Link to={`/case-study/${data.slug}`}>
    <Container className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={data.image.file.url} alt="Placeholder" />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <h1 className="subtitle is-6 is-capitalized">{data.title}</h1>
          {data.description.description}
        </div>
      </div>
    </Container>
  </Link>
);

export default StudyCard;
