import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import BlogContent from '../components/BlogContent';
import NextBlog from '../components/NextBlog';

export const pageQuery = graphql`
  query PageByPath {
    allContentfulNewsPage {
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

export default class page extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    const { allContentfulNewsPage: page } = this.props.data;
  }

  render() {
    return (
      <Layout>
        <Seo
          title="Contact"
          description="Contact us today!"
          url={`${config.siteUrl}`}
        />
        <StaticQuery
          query={pageQuery}
          render={data => {
            const { allContentfulNewsPage: page } = data;
            return (
              <React.Fragment>
                <BlogContent page={page.edges} />
                <NextBlog />
              </React.Fragment>
            );
          }}
        />
      </Layout>
    );
  }
}
