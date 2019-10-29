import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import NewsHero from '../components/NewsHero';

export default class NewsPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Contact"
          description="Contact us today!"
          url={`${config.siteUrl}`}
        />
        <NewsHero />
      </Layout>
    );
  }
}
