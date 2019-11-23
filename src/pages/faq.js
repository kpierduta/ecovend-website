import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
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
    return (
      <Layout>
        <Seo
          title="Faq"
          description="Ask your questions!"
          url={`${config.siteUrl}`}
        />
        <StaticQuery
          query={faqQuery}
          render={data => {
            const { allContentfulFaqPage: faq } = data;
            return (
              <React.Fragment>
                <Container className="section">
                  <div className="container">
                    <BreadCrumbs undelineText="FAQ" simpleText="s" />
                    <Question faq={faq.edges} />
                  </div>
                </Container>
              </React.Fragment>
            );
          }}
        />
      </Layout>
    );
  }
}
