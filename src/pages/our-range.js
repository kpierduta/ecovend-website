import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import RangeHero from '../components/RangeHero';
import Machines from '../components/Machines';
import Contact from '../components/Contact';

export default class OurRange extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Products"
          description="Our Products"
          url={`${config.siteUrl}`}
        />
        <RangeHero />
        <Machines />
        <section className="section">
          <div className="container">
            <Contact />
          </div>
        </section>
      </Layout>
    );
  }
}
