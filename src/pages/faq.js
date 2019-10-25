import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import FaqSection from '../components/FaqSection';

export default class FaqPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Contact"
          description="Contact us today!"
          url={`${config.siteUrl}`}
        />
        <FaqSection />
      </Layout>
    );
  }
}
