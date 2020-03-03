import React from 'react';
import { graphql } from 'gatsby';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import StudyHero from '../components/StudyHero';

export const caseQuery = graphql`
  query Case {
    contentfulCaseStudyPage {
      seoTitle
      metaDescription
      keywords
      displayPage
    }
    allContentfulCase(sort: { fields: order, order: ASC }) {
      edges {
        node {
          slug
          order
          image {
            title
            file {
              url
            }
          }
          title
          description {
            description
          }
        }
      }
    }
  }
`;

export default class CasePage extends React.Component {
  render() {
    const {
      data: { contentfulCaseStudyPage: page, allContentfulCase: cases },
    } = this.props;
    return (
      <Layout>
        <Seo
          title={page.seoTitle}
          description={page.metaDescription}
          keywords={page.keywords}
          url={`${config.siteUrl}`}
        />
        <StudyHero data={cases.edges} />
      </Layout>
    );
  }
}
