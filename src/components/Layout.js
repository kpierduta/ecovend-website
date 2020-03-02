import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';
import { ThemeProvider } from 'styled-components';

import GlobalStyle, { theme } from '../utils/theme';
import config from '../utils/config';
import Heading from './Heading';
import Header from './Header';
import Footer from './Footer';

const query = graphql`
  query LayoutQuery {
    contentfulTopBar {
      email
      mobileNumber
    }
    contentfulCaseStudyPage {
      displayPage
    }
  }
`;

const IndexLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Helmet>
        <title>{config.siteName}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta description={config.description} />
      </Helmet>
      <GlobalStyle />
      <StaticQuery
        query={query}
        render={data => {
          const heading = data.contentfulTopBar;
          const caseStudy = data.contentfulCaseStudyPage;
          return (
            <div>
              <Heading heading={heading} />
              <Header display={caseStudy.displayPage} />
              <div>{children}</div>
              <Footer />
            </div>
          );
        }}
      />
    </React.Fragment>
  </ThemeProvider>
);

IndexLayout.propTypes = {
  children: PropTypes.array.isRequired,
};

export default IndexLayout;
