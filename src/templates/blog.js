import React from 'react';
import { graphql } from 'gatsby';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import BlogContent from '../components/BlogContent';
import NextBlog from '../components/NextBlog';

export const pageQuery = graphql`
  query PageByPath($slug: String) {
    contentfulNewsPage(slug: { eq: $slug }) {
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
    allContentfulNewsPage(sort: { fields: date, order: ASC }) {
      edges {
        node {
          slug
          order
          newsCategory
          date
          newsTitle
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

export default class page extends React.Component {
  render() {
    const {
      data: { contentfulNewsPage: news, allContentfulNewsPage: test },
    } = this.props;
    return (
      <Layout>
        <Seo title="Blog" description="Blog" url={`${config.siteUrl}`} />
        <BlogContent news={news} />
        <NextBlog news={test} />
      </Layout>
    );
  }
}
