import React from 'react';
import { graphql } from 'gatsby';
import { findIndex } from 'lodash';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import BlogContent from '../components/BlogContent';
import NextBlog from '../components/NextBlog';

export const pageQuery = graphql`
  query PageByPath($slug: String) {
    contentfulNewsPage(slug: { eq: $slug }) {
      seoTitle
      metaDescription
      keywords
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
    allContentfulNewsPage(sort: { fields: dateOfPublish, order: DESC }) {
      edges {
        node {
          slug
          newsTitle
          thumbnail {
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
      data: { contentfulNewsPage: news, allContentfulNewsPage: allPosts },
    } = this.props;

    const currentPostIndex = findIndex(allPosts.edges, function(o) {
      return o.node.slug === news.slug;
    });
    const nextPost = allPosts.edges[currentPostIndex + 1];

    return (
      <Layout>
        <Seo
          title={news.seoTitle}
          description={news.metaDescription}
          keywords={news.keywords}
          url={`${config.siteUrl}`}
        />
        <BlogContent news={news} />
        {nextPost && <NextBlog news={nextPost.node} share={news} />}
      </Layout>
    );
  }
}
