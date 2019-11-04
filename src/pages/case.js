import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import StudyHero from '../components/StudyHero';

export default class Case extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Case"
          description="Contact us today!"
          url={`${config.siteUrl}`}
        />
        <StudyHero />
      </Layout>
    );
  }
}
