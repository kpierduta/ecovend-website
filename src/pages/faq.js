import React from 'react';
import styled from 'styled-components';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';

import theme from '../utils/theme';
import BreadCrumbs from '../components/BreadCrumbs';
import FaqItem from '../components/FaqItem';

const Container = styled.section`
  font-family: ${theme.primaryFontFamily}!important;
  .title {
    margin-bottom: 6rem;
  }
`;

const CardWrapper = styled.div`
  margin: 2rem 0rem;
  :first-child {
    margin-top: 6rem;
  }
`;

export default class FaqPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Contact"
          description="Contact us today!"
          url={`${config.siteUrl}`}
        />
        <Container className="section">
          <div className="container">
            <BreadCrumbs undelineText="FAQ" simpleText="s" />
            <div className="columns">
              <div className="column is-12">
                <CardWrapper>
                  <FaqItem questions="What information do i need to supply to you to start my project?" />
                </CardWrapper>
                <CardWrapper>
                  <FaqItem questions="What information do i need to supply to you to start my project?" />
                </CardWrapper>
                <CardWrapper>
                  <FaqItem questions="What information do i need to supply to you to start my project?" />
                </CardWrapper>
                <CardWrapper>
                  <FaqItem questions="What information do i need to supply to you to start my project?" />
                </CardWrapper>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    );
  }
}
