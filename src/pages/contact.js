import React from 'react';
import { graphql } from 'gatsby';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import BreadCrumbs from '../components/BreadCrumbs';
import ContactHero from '../components/ContactHero';
import Contact from '../components/Contact';

export const contactQuery = graphql`
  query Contactpage {
    contentfulContact {
      mainTitle
      description {
        description
      }
      images {
        file {
          url
        }
      }
    }
  }
`;

export default class ContactPage extends React.Component {
  render() {
    const {
      data: { contentfulContact: ContactData },
    } = this.props;
    return (
      <Layout>
        <Seo
          title="Contact"
          description="Contact us today!"
          url={`${config.siteUrl}`}
        />
        <BreadCrumbs underlineText="Contact Us" simpleText="" />
        <Contact />
        <ContactHero data={ContactData} />
      </Layout>
    );
  }
}
