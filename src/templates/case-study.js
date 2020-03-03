import React from 'react';
import { graphql } from 'gatsby';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import CaseStudyHero from '../components/CaseStudyHero';
import CaseContent from '../components/CaseContent';
import CaseCard from '../components/CaseCard';
import Approach from '../components/Approach';
import Contact from '../components/Contact';
import Result from '../components/Result';

export const caseStudyQuery = graphql`
  query CaseStudy($slug: String) {
    contentfulCase(slug: { eq: $slug }) {
      slug
      seoTitle
      metaDescription
      keywords
      title
      description {
        description
      }
      mainImage {
        title
        file {
          url
        }
      }
      comment
      author
      industry
      location
      size
      companyBio {
        companyBio
      }
      overviewTitle
      overviewFirstParagraph {
        overviewFirstParagraph
      }
      overviewSecondParagraph {
        overviewSecondParagraph
      }
      cards {
        color
        title
        subtitle
      }
      approachTitle
      approachSubtitle {
        approachSubtitle
      }
      approachOrangeText
      solutionFirstParagraph {
        solutionFirstParagraph
      }
      solutionSecondParagraph {
        solutionSecondParagraph
      }
      resultImage {
        title
        file {
          url
        }
      }
      result {
        json
      }
    }
  }
`;

export default class Case extends React.Component {
  render() {
    const {
      data: { contentfulCase: page },
    } = this.props;

    return (
      <Layout>
        <Seo
          title={page.seoTitle}
          description={page.metaDescription}
          keywords={page.keywords}
          url={`${config.siteUrl}`}
        />
        <CaseStudyHero />
        <CaseContent data={page} />
        <CaseCard data={page.cards} />
        <Approach data={page} />
        <Result data={page} />
        <Contact />
      </Layout>
    );
  }
}
