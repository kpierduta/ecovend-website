import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import ContactHero from '../components/ConatctHero';

export default class ContactPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Contact"
          description="Contact us today!"
          url={`${config.siteUrl}`}
        />
        <ContactHero />
        <ContactWrapper />
      </Layout>
    );
  }
}
