import React from 'react';
import styled from 'styled-components';

5;

const Container = styled.section`
  font-family: ${props => props.theme.primaryFontFamily};
  padding-bottom: 3.5rem;
  .columns {
    margin-top: 1rem;
  }
  .title.is-5 {
    padding-top: 2rem;
    color: ${props => props.theme.secondaryColor};
  }
  .para {
    padding: 0rem 0rem 1rem 0rem;
  }
  img {
    height: 14rem;
    width: 19rem;
  }
  .first {
    background-color: #f7f7f7;
  }
  .second {
    background-color: #636362;
  }
`;

const NextBlog = ({ news }) => (
  <Container>
    <div className="container">
      <div className="columns">
        <div className="column first">
          <h1 className="title is-5">SHARE THIS POST</h1>
          <p className="title is-6">Facebook</p>
          <p className="title is-6">Twitter</p>
        </div>
        <div className="column second">
          <article className="media">
            <figure className="media-left">
              <p className="image">
                <img src={news.thumbnail.file.url} alt={news.thumbnail.title} />
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <p className="subtitle is-2 has-text-white">Next Blog</p>
                <p className="subtitle is-4 has-text-white">{news.newsTitle}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </Container>
);

export default NextBlog;
