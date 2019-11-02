import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import BlogContent from '../components/BlogContent';
import NextBlog from '../components/NextBlog';

export default class Blog extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Contact"
          description="Contact us today!"
          url={`${config.siteUrl}`}
        />
        <BlogContent />
        <NextBlog />
      </Layout>
    );
  }
}
