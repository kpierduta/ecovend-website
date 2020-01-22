import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import RangeHero from '../components/RangeHero';
import Product from '../components/Product';
import Contact from '../components/Contact';

export default class OurProduct extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Products"
          description="Our Products"
          url={`${config.siteUrl}`}
        />
        <RangeHero />
        <Product />
        <Contact />
      </Layout>
    );
  }
}
