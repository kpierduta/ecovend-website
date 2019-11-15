import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import config from '../utils/config';
import Hero from '../components/Hero';
import About from '../components/About';
import Video from '../components/Video';
import DrsInfo from '../components/DrsInfo';
import Steps from '../components/Steps';
import Choose from '../components/Choose';
import Customer from '../components/Customer';
import Advertisment from '../components/Advertising';
import ContactWrapper from '../components/ContactWrapper';

export const indexQuery = graphql`
  query Home {
    contentfulHomepage {
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
      iconOne {
        file {
          url
        }
      }
      iconOneText
      iconTwo {
        file {
          url
        }
      }
      iconTwoText
      iconThree {
        file {
          url
        }
      }
      iconThreeText
      iconFour {
        file {
          url
        }
      }
      iconFourText
      iconFive {
        file {
          url
        }
      }
      iconFiveText
      prImage {
        file {
          url
        }
      }
      differenceTitle
      differencePara
      firstPoint
      secondPoint
      thirdPoint
      fourthPoint
      marketingTitle
      marketingPara {
        marketingPara
      }
    }
    allContentfulHomepageChoose(sort: { fields: listingOrder }) {
      edges {
        node {
          title
          image {
            title
            file {
              url
            }
          }
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
            const {
              contentfulHomepage: home,
              allContentfulHomepageChoose: choose,
              contentfulContact: contact,
            } = data;
            return (
              <React.Fragment>
                <Hero home={home} />
                <About home={home} />
                <Video home={home} />
                <DrsInfo home={home} />
                <Steps home={home} />
                <Choose home={home} choose={choose.edges} />
                <Customer home={home} />
                <Advertisment home={home} />
                <ContactWrapper contact={contact} />
              </React.Fragment>
            );
          }}
        />
      </Layout>
    );
  }
}
