import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import config from '../utils/config';
import Hero from '../components/Hero';
import About from '../components/About';
import DrsInfo from '../components/DrsInfo';
import Steps from '../components/Steps';
import Choose from '../components/Choose';
import Advertisment from '../components/Advertising';
import Contact from '../components/Contact';

export const indexQuery = graphql`
  query Home {
    contentfulHomePage {
      title
      subtitle
      headerimage {
        title
        file {
          url
        }
      }
      greyBlockTitle
      greyBlockParagraph {
        internal {
          content
        }
      }
      greyBlockSecondPara {
        internal {
          content
        }
      }
      videoTitle
      videoLink
      orangeTitle
      orangeParagraph {
        internal {
          content
        }
      }
      orangeSecondPara {
        internal {
          content
        }
      }
      orangeThirdPara {
        internal {
          content
        }
      }
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
    }
  }
`;

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Home"
          description="Ecovend Reverse Vending"
          url={`${config.siteUrl}`}
        />
        <StaticQuery
          query={indexQuery}
          render={data => {
            const { contentfulHomePage: home } = data;
            return (
              <React.Fragment>
                <Hero home={home} />
                <About home={home} />
                <DrsInfo home={home} />
                <Steps home={home} />
                <Choose home={home} choose={home.chooseIcons} />
                {/**
                <Customer home={home} />
                */}
                <Advertisment home={home} data={home.imageGrid} />
                <Contact />
              </React.Fragment>
            );
          }}
        />
      </Layout>
    );
  }
}
