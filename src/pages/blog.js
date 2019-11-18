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
      newsTitle
      image {
        file {
          url
        }
      }
    }
  }
`;

export default class page extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    const { contentfulNewsPage: news } = this.props.data;
  }

  render() {
    const {
      data: { contentfulNewsPage: news },
    } = this.props;
    return (
      <Layout>
        <Seo title="Blog" description="Blog" url={`${config.siteUrl}`} />
        <BlogContent news={news} />
        <NextBlog />
      </Layout>
    );
  }
}
