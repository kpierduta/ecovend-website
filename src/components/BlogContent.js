import React from 'react';
import styled from 'styled-components';

import BreadCrumbs from './BreadCrumbs';

const Container = styled.section`
  .columns {
    margin-top: 1rem;
  }

  .title.is-3 {
    padding-top: 2rem;
  }

  .para {
    padding: 0rem 0rem 1rem 0rem;
  }

  img {
    margin-top: 3rem;
  }

  .author {
    margin-top: 4rem;
  }
`;

class BlogContent extends React.Component {
  render() {
    const { news } = this.props;
    return (
      <Container className="section">
        <div className="container">
          <BreadCrumbs undelineText="Bl" simpleText="og" />
          <div className="columns is-multiline">
            <div className="column is-8">
              <h3 className="title is-3 is-spaced has-text-danger">
                {news.newsTitle}
              </h3>
              <h4 className="subtitle is-4">
                {news.shortDescription.internal.content}
              </h4>
              <p className="para subtitle is-6">
                {news.description.internal.content}
              </p>
            </div>
            <div className="column is-4">
              <img src={news.image.file.url} alt="news" />
            </div>
            <div className="column is-12">
              <p className="para subtitle is-6">
                {news.description.internal.content}
              </p>
              <div className="author">
                <p className="subtitle is-size-6 has-text-weight-bold">
                  Author: EcoVend
                </p>
                <p className="is-size-6">Published: {news.date}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
export default BlogContent;
