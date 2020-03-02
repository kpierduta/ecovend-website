import React from 'react';
import { graphql } from 'gatsby';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import RangeHero from '../components/RangeHero';
import Product from '../components/Product';
import Contact from '../components/Contact';

export const rangeQuery = graphql`
  query Range {
    contentfulProductPage {
      seoTitle
      metaDescription
      keywords
      description {
        description
      }
    }
    allContentfulEcoVendMachines(sort: { fields: order }) {
      edges {
        node {
          order
          slug
          machineName
          machineImage {
            title
            file {
              url
            }
          }
        }
      }
    }
  }
`;

export default class OurProduct extends React.Component {
  render() {
    const {
      data: {
        contentfulProductPage: page,
        allContentfulEcoVendMachines: product,
      },
    } = this.props;
    return (
      <Layout>
        <Seo
          title={page.seoTitle}
          description={page.metaDescription}
          keywords={page.keywords}
          url={`${config.siteUrl}`}
        />
        <RangeHero subtitle={page.description.description} />
        <Product data={product.edges} />
        <Contact />
      </Layout>
    );
  }
}
