import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Advertising from '../components/AdvertisingHero';
import Rvm from '../components/RvmAdvertising';
import Contact from '../components/Contact';

export const advertQuery = graphql`
  query advert {
    contentfulAdvertisingPage {
      title
      visualTitle
      visualSubtitle
      visualParagraph
      videoClick
      introParagrpah {
        introParagrpah
      }
      heroImage {
        file {
          url
        }
      }
      videoTitle
      videoPoster {
        file {
          url
        }
      }
      sideTitle
    }
    allContentfulAdvertisingStep(sort: { order: ASC, fields: listingOrder }) {
      edges {
        node {
          listingOrder
          description
        }
      }
    }
  }
`;

export default class AdvertisingPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Advertising"
          description="Advertising with us today!"
          url={`${config.siteUrl}`}
        />
        <StaticQuery
          query={advertQuery}
          render={data => {
            const {
              contentfulAdvertisingPage: adv,
              allContentfulAdvertisingStep: advSteps,
            } = data;
            return (
              <React.Fragment>
                <Advertising adv={adv} />
                <Rvm adv={adv} advSteps={advSteps.edges} />
                <Contact />
              </React.Fragment>
            );
          }}
        />
      </Layout>
    );
  }
}
