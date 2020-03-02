import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import BreadCrumbs from '../components/BreadCrumbs';
import Question from '../components/Questionwrapper';

const Container = styled.section`
  font-family: ${props => props.theme.primaryFontFamily}!important;
  .title {
    margin-bottom: 6rem;
  }
`;

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
