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
  }
`;

export default class CasePage extends React.Component {
  render() {
    const {
      data: { contentfulCaseStudyPage: page },
    } = this.props;
    return (
      <Layout>
        <Seo
          title={page.seoTitle}
          description={page.metaDescription}
          keywords={page.keywords}
          url={`${config.siteUrl}`}
        />
        <StudyHero />
      </Layout>
    );
  }
}
