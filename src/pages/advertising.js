import React from 'react';
import { graphql } from 'gatsby';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import AdvertisingHero from '../components/AdvertisingHero';
import Rvm from '../components/RvmAdvertising';
import Infographic from '../components/Infographic';

export const advertQuery = graphql`
  query advert {
    contentfulAdvertisingPage {
      seoTitle
      metaDescription
      keywords
      title
      introParagrpah {
        introParagrpah
        childMarkdownRemark {
          html
        }
      }
      heroTitle
      heroSubtitle
      video {
        file {
          url
        }
      }
      videoTitle
      videoFirstPara {
        videoFirstPara
      }
      videoSecondPara {
        videoSecondPara
        childMarkdownRemark {
          html
        }
      }
      advertisementPoints
      videoSecondTitle
      videoParagraph
      infoGraphicsPoint
      gallery {
        title
        file {
          url
        }
      }
    }
    contentfulHomePage {
      imageGrid {
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
      data: { contentfulAdvertisingPage: adv, contentfulHomePage: home },
    } = this.props;
    return (
      <Layout>
        <Seo
          title={adv.seoTitle}
          description={adv.metaDescription}
          keywords={adv.keywords}
          url={`${config.siteUrl}`}
        />
        <AdvertisingHero adv={adv} />
        <Rvm adv={adv} hero={home} />
        <Infographic data={adv} />
      </Layout>
    );
  }
}
