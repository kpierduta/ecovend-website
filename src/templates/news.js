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
      sort: { fields: dateOfPublish, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          slug
          dateOfPublish(formatString: "MMMM Do, YYYY,")
          category
          newsTitle
          excerpt
          image {
            file {
              url
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

    const pages = [];

    for (let i = 1; i <= pageContext.numberOfPages; i++) {
      pages.push(i);
    }

    return (
      <Layout>
        <Seo
          title="News"
          description="News about Eco-vend"
          url={`${config.siteUrl}`}
        />
        <NewsHero news={news.edges} />
        <Pagination pageContext={pageContext} pages={pages} />
      </Layout>
    );
  }
}
