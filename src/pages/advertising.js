import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Advertising from '../components/AdvertisingHero';
import Rvm from '../components/RvmAdvertising';
import Contact from '../components/Contact';

export default class AdvertisingPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Contact"
          description="Contact us today!"
          url={`${config.siteUrl}`}
        />
        <Advertising />
        <Rvm />
        <Contact />
      </Layout>
    );
  }
}
