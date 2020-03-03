import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.div`
  margin-top: 3rem;
  line-height: 34px;
  transition: all 0.5s;
  :hover {
    transform: scale(1.05);
  }
`;

const StudyCard = ({ data }) => (
  <Link to={`/case-study/${data.slug}`}>
    <Container className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={data.image.file.url} alt={data.image.title} />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <h1 className="title is-4 is-capitalized has-text-primary">
            {data.title}
          </h1>
          {data.description.description}
        </div>
      </div>
    </Container>
  </Link>
);

export default StudyCard;
