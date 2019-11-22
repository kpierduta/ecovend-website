import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import theme from '../utils/theme';

const Container = styled.div`
  margin-top: 1rem;
  font-family: ${theme.primaryFontFamily};
  font-size: ${theme.fontSize} !important;
  background-color: #aabcbf;
  padding-bottom: 2rem;
  .columns {
    margin-left: 0rem !important;
    margin-right: 0rem !important;
  }
  .subtitle {
    margin: 3rem;
    font-weight: 500;
    line-height: 1.75;
  }
  .subtitle.is-5 {
    font-size: ${theme.fontSizeMedium} !important;
    font-weight: 500;
  }
  .text {
    font-weight: 400;
    letter-spacing: 1.1px;
    line-height: 2;
    margin-top: 1rem;
  }
  .sub-text {
    padding-bottom: 4rem;
  }
`;

const LinkStyled = styled(Link)`
  font-family: ${theme.primaryFontFamily};
  background: transparent;
  border: none;
  font-size: ${theme.fontSize};
`;

class About extends React.Component {
  render() {
    const { home } = this.props;
    return (
      <Container className="container">
        <section className="section has-text-centered">
          <h2 className="subtitle is-5 has-text-white is-capitalized">
            {home.greyBlockTitle}
          </h2>
          <div className="columns is-centered">
            <div className="column">
              <p className="has-text-white text">
                {home.greyBlockParagraph.internal.content}
              </p>
              <p className="has-text-white text sub-text">
                {home.greyBlockSecondPara.internal.content}
              </p>
              <LinkStyled to="/contact" className="has-text-white">
                Contact
              </LinkStyled>
            </div>
          </div>
        </section>
      </Container>
    );
  }
}

export default About;
