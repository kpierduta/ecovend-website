import React from 'react';
import { graphql } from 'gatsby';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Machines from '../components/Machines';
import Contact from '../components/Contact';

export const machineQuery = graphql`
  query Machine($slug: String) {
    contentfulEcoVendMachines(slug: { eq: $slug }) {
      machineName
      machineImage {
        title
        file {
          url
        }
      }
      location
      dimensions
      screenSize
      touchScreen
      rewardsSystems
      materialTypes
      capacity
      automation
      maxContainerSize
      materialSortingCompaction
      outputs
      reporting
      powerSupply
      productivity
      ipRating
    }
  }
`;

export default class OurRange extends React.Component {
  render() {
    const {
      data: { contentfulEcoVendMachines: machines },
    } = this.props;
    return (
      <Layout>
        <Seo
          title="Products"
          description="Our Products"
          url={`${config.siteUrl}`}
        />
        <Machines data={machines} />
        <section className="section">
          <div className="container">
            <Contact />
          </div>
        </section>
      </Layout>
    );
  }
}
