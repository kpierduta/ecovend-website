import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import NewsHero from '../components/NewsHero';

export const newsQuery = graphql`
  query news {
    allContentfulNewsPage(sort: { fields: date, order: ASC }) {
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
    return (
      <Layout>
        <Seo
          title="News"
          description="News about Eco-vend"
          url={`${config.siteUrl}`}
        />{' '}
        <StaticQuery
          query={newsQuery}
          render={data => {
            const { allContentfulNewsPage: news } = data;
            return (
              <React.Fragment>
                <NewsHero news={news.edges} />
              </React.Fragment>
            );
          }}
        />
      </Layout>
    );
  }
}
