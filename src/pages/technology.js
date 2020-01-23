import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Contact from '../components/Contact';
import BreadCrumbs from '../components/BreadCrumbs';
import Steps from '../components/Steps';
import TechnologyItem from '../components/TechnologyItem';

const TextWrapper = styled.div`
  margin-top: 2rem;
`;

export const techQuery = graphql`
  query Tech {
    contentfulHomePage {
      stepTitle
      stepsSectionParagraph {
        internal {
          content
        }
      }
      stepOneIcon {
        file {
          url
        }
      }
      stepOneTitle
      stepOneText
      stepTwoIcon {
        file {
          url
        }
      }
      stepTwoTitle
      stepTwoText
      stepThreeIcon {
        file {
          url
        }
      }
      stepThreeTitle
      stepThreeText
      chooseTitle
    }
  }
`;

export default class Technology extends React.Component {
  render() {
    const {
      data: { contentfulHomePage: home },
    } = this.props;
    return (
      <Layout>
        <Seo
          title="Technology"
          description="Technology we worked on!"
          url={`${config.siteUrl}`}
        />
        <BreadCrumbs undelineText="Tech" simpleText="nology" />
        <TextWrapper>
          <Steps home={home} />
        </TextWrapper>
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              <TechnologyItem title="How the machine operates" />
              <TechnologyItem title="Software Updates" />
              <TechnologyItem title="Technical Support" />
              <TechnologyItem title="Remote User Platform" />
              <TechnologyItem title="Tickets" />
              <TechnologyItem title="Upcoming Features" />
            </div>
          </div>
        </section>
        <Contact />
      </Layout>
    );
  }
}
