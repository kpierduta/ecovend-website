import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import BreadCrumbs from '../components/BreadCrumbs';
import ContactHero from '../components/ConatctHero';
import Contact from '../components/Contact';

export default class ContactPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Contact"
          description="Contact us today!"
          url={`${config.siteUrl}`}
        />
        <BreadCrumbs undelineText="Background" simpleText=" & Contact Us" />
        <ContactHero />
        <Contact />
      </Layout>
    );
  }
}
