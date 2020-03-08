import React from 'react';
import { graphql } from 'gatsby';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import BreadCrumbs from '../components/BreadCrumbs';
import Question from '../components/Questionwrapper';

export const faqQuery = graphql`
  query faq {
    allContentfulFaqPage {
      edges {
        node {
          question {
            question
          }
          answer {
            answer
          }
        }
      }
    }
  }
`;

export default class FaqPage extends React.Component {
  render() {
    const {
      data: { allContentfulFaqPage: faq },
    } = this.props;
    return (
      <Layout>
        <Seo
          title="Faq"
          description="Ask your questions!"
          url={`${config.siteUrl}`}
        />
        <BreadCrumbs underlineText="FAQ" simpleText="s" />
        <Question faq={faq.edges} />
      </Layout>
    );
  }
}
