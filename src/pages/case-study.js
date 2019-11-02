import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import CaseStudyHero from '../components/CaseStudyHero';
import CaseContent from '../components/CaseContent';
import Contact from '../components/Contact';
import Result from '../components/Result';

export default class Case extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Contact"
          description="Contact us today!"
          url={`${config.siteUrl}`}
        />
        <CaseStudyHero />
        <CaseContent />
        <Result />
        <Contact />
      </Layout>
    );
  }
}
