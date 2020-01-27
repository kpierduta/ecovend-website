import React from 'react';
import { graphql } from 'gatsby';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Advertising from '../components/AdvertisingHero';
import Rvm from '../components/RvmAdvertising';
import Infographic from '../components/Infographic';

export const advertQuery = graphql`
  query advert {
    contentfulAdvertisingPage {
      title
      visualTitle
      visualSubtitle
      visualParagraph
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
    const {
      data: {
        contentfulAdvertisingPage: adv,
        allContentfulAdvertisingStep: advSteps,
      },
    } = this.props;
    return (
      <Layout>
        <Seo
          title="Advertising"
          description="Advertising with us today!"
          url={`${config.siteUrl}`}
        />
        <Advertising adv={adv} />
        <Rvm adv={adv} advSteps={advSteps.edges} />
        <Infographic />
      </Layout>
    );
  }
}
