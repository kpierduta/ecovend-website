import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  font-family: ${props => props.theme.primaryFontFamily};
  line-height: 34px;
  padding-top: 0rem !important;
  .para {
    padding: 2rem 0rem 0rem 0rem;
  }
  .comment {
    padding: 4rem 0rem 0rem 0rem;
    @media only screen and (max-width: 600px) {
      padding: 0rem;
    }
  }
  .text {
    text-align: right;
  }
`;

const CaseContent = ({ data }) => (
  <Container className="section">
    <div className="container">
      <div className="columns is-multiline">
        <div className="column is-7">
          <img src={data.mainImage.file.url} alt={data.mainImage.title} />
        </div>
        <div className="column is-5">
          <h1 className="title is-4 has-text-danger">{data.title}</h1>
          <p>
            <span className="has-text-weight-semibold	has-text-danger">
              Industry:
            </span>{' '}
            {data.industry}
          </p>
          <p>
            <span className="has-text-weight-semibold has-text-danger">
              Location:
            </span>
            {data.location}
          </p>
          <p>
            <span className="has-text-weight-semibold	has-text-danger">
              Size:
            </span>
            {data.size}
          </p>
          <h1 className="title is-5 para has-text-danger">Company Bio</h1>
          <p>{data.companyBio.companyBio}</p>
        </div>
        <div className="column is-7">
          <h1 className="subtitle is-3 comment has-text-danger">OVERVIEW</h1>
          <h1 className="subtitle is-5 para has-text-dark has-text-weight-semibold">
            {data.overviewTitle}
          </h1>
          <p>{data.overviewFirstParagraph.overviewFirstParagraph}</p>
          <p className="para">
            {data.overviewSecondParagraph.overviewSecondParagraph}
          </p>
        </div>
        <div className="column is-5">
          <p className="is-size-5 comment is-italic is-pulled-right-is-desktop has-text-danger">
            {data.comment}
          </p>
          <div className="is-italic is-pulled-right">
            {data.author.map(items => (
              <p className="has-text-weight-bold">{items}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default CaseContent;
