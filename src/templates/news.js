import React from 'react';
import { graphql } from 'gatsby';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import NewsHero from '../components/NewsHero';
import Pagination from '../components/Pagination';

export const newsQuery = graphql`
  query news($skip: Int!, $limit: Int!) {
    allContentfulNewsPage(
      sort: { fields: date, order: ASC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          slug
          order
          newsCategory
          date
          newsTitle
          shortDescription {
            internal {
              content
            }
          }
          image {
            file {
              url
            }
          }
          description {
            internal {
              content
            }
          }
        }
      }
    }
  }
`;

export default class NewsPage extends React.Component {
  render() {
    const {
      data: { allContentfulNewsPage: news },
    } = this.props;
    const { pageContext } = this.props;
    const { previousPagePath, nextPagePath } = pageContext;

    return (
      <Layout>
        <Seo
          title="News"
          description="News about Eco-vend"
          url={`${config.siteUrl}`}
        />
        <NewsHero news={news.edges} />
        <Pagination pageContext={pageContext} />
      </Layout>
    );
  }
}
