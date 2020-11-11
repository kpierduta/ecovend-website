import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import config from '../utils/config';
import Hero from '../components/Hero';
import About from '../components/About';
import DrsInfo from '../components/DrsInfo';
import Steps from '../components/Steps';
import Choose from '../components/Choose';
import Advertisment from '../components/Advertising';
import RvmImages from '../components/RvmImages';
import Contact from '../components/Contact';

export const indexQuery = graphql`
  query Home {
    contentfulHomePage {
      seoTitle
      metaDescription
      keywords
      title
      subtitle
      headerimage {
        title
        file {
          url
        }
      }
      sectionTitle
      sectionFirstSubtitle {
        sectionFirstSubtitle
      }
      sectionSecondSubtitle
      bbcSectionTitle
      newsSubtitle
      firstPara
      secondPara
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
      chooseSubtitle
      chooseIcons {
        title
        description
        file {
          url
        }
      }
      marketingTitle
      marketingPara {
        marketingPara
      }
      imageGrid {
        file {
          url
        }
      }
      firstVideo {
        file {
          url
        }
      }
      secondVideo {
        file {
          url
        }
      }
    }
    allContentfulHomePage {
      edges {
        node {
          machineFeatures {
            json
          }
        }
      }
    }
  }
`;

export default class IndexPage extends React.Component {
  render() {
    const {
      data: { contentfulHomePage: home, allContentfulHomePage: content },
    } = this.props;
    return (
      <Layout>
        <Seo
          title={home.seoTitle}
          description={home.metaDescription}
          keywords={home.keywords}
          url={`${config.siteUrl}`}
        />
        <Hero home={home} content={content.edges[1]} />
        <About home={home} />
        <DrsInfo home={home} />
        <section className="section">
          <Steps home={home} />
        </section>
        <Choose home={home} />
        {/*
          <Customer home={home} />
        */}
        <Advertisment home={home} />
        <RvmImages images={home.imageGrid} />
        <Contact isHidden />
      </Layout>
    );
  }
}
