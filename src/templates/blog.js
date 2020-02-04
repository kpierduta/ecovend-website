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
      dateOfPublish(formatString: "MMMM Do, YYYY,")
      category
      newsTitle
      thumbnail {
        file {
          url
        }
      }
      image {
        file {
          url
        }
      }
      newsContent {
        json
      }
    }
  }
`;

export default class page extends React.Component {
  render() {
    const {
      data: { contentfulNewsPage: news, allContentfulNewsPage: data },
    } = this.props;
    return (
      <Layout>
        <Seo title="Blog" description="Blog" url={`${config.siteUrl}`} />
        <BlogContent news={news} />
        <NextBlog news={news} />
      </Layout>
    );
  }
}
