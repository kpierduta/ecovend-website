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
      introParagrpah {
        introParagrpah
      }
      heroTitle
      heroImage {
        file {
          url
        }
      }
      videoTitle
      advertisementPoints
      videoSecondTitle
      videoParagraph
      infoGraphics {
        description
        file {
          url
        }
      }
      gallery {
        title
        file {
          url
        }
      }
    }
  }
`;

export default class AdvertisingPage extends React.Component {
  render() {
    const {
      data: { contentfulAdvertisingPage: adv },
    } = this.props;
    return (
      <Layout>
        <Seo
          title="Advertising"
          description="Advertising with us today!"
          url={`${config.siteUrl}`}
        />
        <Advertising adv={adv} />
        <Rvm adv={adv} />
        <Infographic data={adv} />
      </Layout>
    );
  }
}
