import React from 'react';
import styled from 'styled-components';

import BreadCrumbs from './BreadCrumbs';
import Content from './Content';

const Container = styled.section`
  .columns {
    margin-top: 1rem;
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
              <Content data={news.newsContent.json} />
            </div>
            <div className="column is-4">
              <img src={news.image.file.url} alt="news" />
            </div>
            <div className="column is-12">
              <div className="author">
                <p className="subtitle is-size-6 has-text-weight-bold">
                  Author: EcoVend
                </p>
                <p className="is-size-6">Published: {news.dateOfPublish}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
export default BlogContent;
