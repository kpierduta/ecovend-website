import React from 'react';
import styled from 'styled-components';

import BreadCrumbs from './BreadCrumbs';
import Content from './Content';

const Section = styled.section`
  padding: 2rem 0rem;
  .columns {
    margin-top: 1rem;
  }
  .column.is-8 {
    padding-left: 0rem;
  }

  .author {
    margin-bottom: 1rem;
  }
  .is-size-6 {
    padding-left: 0.65rem;
  }
`;

class BlogContent extends React.Component {
  render() {
    const { news } = this.props;
    return (
      <React.Fragment>
        <BreadCrumbs underlineText="Bl" simpleText="og" />
        <Section className="section">
          <div className="container">
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
      </React.Fragment>
    );
  }
}
export default BlogContent;
