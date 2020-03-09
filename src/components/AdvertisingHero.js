import React from 'react';
import styled from 'styled-components';

import BreadCrumbs from './BreadCrumbs';

const Section = styled.section`
  font-family: ${props => props.theme.primaryFontFamily};
  strong {
    color: ${props => props.theme.brandColor};
  }
`;

class AdvertisingHero extends React.Component {
  render() {
    const { adv } = this.props;
    return (
      <Section className="hero">
        <BreadCrumbs underlineText="Ad" simpleText="vertising" />
        <div className="hero-body">
          <div className="container">
            <h1 className="subtitle is-6">{adv.title}</h1>
            <div
              className="subtitle is-6"
              dangerouslySetInnerHTML={{
                __html: adv.introParagraph.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
      </Section>
    );
  }
}

export default AdvertisingHero;
