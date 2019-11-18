import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import StudyHero from '../components/StudyHero';

export default class Case extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Case" description="Our Clients" url={`${config.siteUrl}`} />
        <StudyHero />
      </Layout>
    );
  }
}
