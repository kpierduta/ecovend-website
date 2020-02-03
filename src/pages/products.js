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
      data: { allContentfulEcoVendMachines: product },
    } = this.props;
    return (
      <Layout>
        <Seo
          title="Products"
          description="Our Products"
          url={`${config.siteUrl}`}
        />
        <RangeHero />
        <Product data={product.edges} />
        <Contact />
      </Layout>
    );
  }
}
