import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';
import BreadCrumbs from './BreadCrumbs';

const Container = styled.section`
  font-family: ${theme.primaryFontFamily};
  .columns {
    margin-top: 1rem;
  }
  .title.is-3 {
    padding-top: 2rem;
    color: ${theme.secondaryColor};
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
          <BreadCrumbs undelineText="BL" simpleText="OG" />
          <div className="columns is-multiline">
            <div className="column is-8">
              <h1 className="title is-3 is-spaced">{news.newsTitle}</h1>
              <h1 className="subtitle is-4">
                {news.shortDescription.internal.content}
              </h1>
              <p className="para">{news.description.internal.content}</p>
            </div>
            <div className="column is-4">
              <img src={news.image.file.url} alt="news" />
            </div>
            <div className="column is-12">
              <p className="para">{news.description.internal.content}</p>
              <div className="author">
                <p className="has-text-weight-bold">Author: EcoVend</p>
                <p>Published: {news.date}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
export default BlogContent;
