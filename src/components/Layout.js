import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';

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
  }
`;

const IndexLayout = ({ children }) => (
  <React.Fragment>
    <Helmet>
      <title>{config.siteName}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta description={config.description} />
    </Helmet>
    <StaticQuery
      query={query}
      render={data => {
        const heading = data.contentfulTopBar;
        return (
          <div>
            <Heading heading={heading} />
            <Header />
            <div>{children}</div>
            <Footer />
          </div>
        );
      }}
    />
  </React.Fragment>
);

IndexLayout.propTypes = {
  children: PropTypes.array.isRequired,
};

export default IndexLayout;
