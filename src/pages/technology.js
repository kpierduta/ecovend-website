import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Contact from '../components/Contact';
import BreadCrumbs from '../components/BreadCrumbs';
import Steps from '../components/Steps';
import Technology from '../components/Technology';

export const techQuery = graphql`
  query Tech {
    contentfulHomePage {
      stepTitle
      stepsSectionParagraph {
        internal {
          content
        }
      }
      stepOneIcon {
        file {
          url
        }
      }
      stepOneTitle
      stepOneText
      stepTwoIcon {
        file {
          url
        }
      }
      stepTwoTitle
      stepTwoText
      stepThreeIcon {
        file {
          url
        }
      }
      stepThreeTitle
      stepThreeText
      chooseTitle
    }
    contentfulTechnologyPage {
      displayTechnologyCard
      displayTechnologySection
      title
      subtitle {
        subtitle
      }
    }
    allContentfulTechnologyCards(sort: { fields: order }) {
      edges {
        node {
          order
          title
          subtitle {
            subtitle
          }
        }
      }
    }
  }
`;

export default class TechnologyPage extends React.Component {
  render() {
    const {
      data: {
        contentfulHomePage: home,
        allContentfulTechnologyCards: cards,
        contentfulTechnologyPage: technology,
      },
    } = this.props;
    return (
      <Layout>
        <Seo
          title="Technology"
          description="Technology we worked on!"
          url={`${config.siteUrl}`}
        />
        <BreadCrumbs undelineText="Tech" simpleText="nology" />
        <Steps home={home} />
        <Technology items={cards.edges} technology={technology} />
        <Contact />
      </Layout>
    );
  }
}
