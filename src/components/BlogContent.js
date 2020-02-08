import React from 'react';
import styled from 'styled-components';

import BreadCrumbs from './BreadCrumbs';
import Content from './Content';

const Section = styled.section`
  .columns {
    margin-top: 1rem;
  }

  img {
    margin-top: 3rem;
  }
  .author {
    margin-bottom: 1rem;
  }
`;

class BlogContent extends React.Component {
  render() {
    const { news } = this.props;
    return (
      <Section className="section">
        <div className="container">
          <BreadCrumbs undelineText="Bl" simpleText="og" />
          <div className="columns is-multiline">
            <div className="column is-8">
              <h3 className="title is-5 is-spaced has-text-danger">
                {news.newsTitle}
              </h3>
              <Content data={news.newsContent.json} />
            </div>
            <div className="column is-4">
              <img src={news.image.file.url} alt="news" />
            </div>
          </div>
          <p className="is-size-6 has-text-weight-bold author">
            Author: EcoVend
          </p>
          <p className="is-size-6">Published: {news.dateOfPublish}</p>
        </div>
      </Section>
    );
  }
}
export default BlogContent;
