import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';
import BreadCrumbs from './BreadCrumbs';

const Container = styled.section`
  font-family: ${theme.primaryFontFamily};
  .hero-body {
    padding: 3rem 0rem;
  }
  .title {
    font-size: ${theme.fontSizeMedium};
    padding-bottom: 1rem;
  }
  .subtitle {
    font-size: ${theme.fontSizeMedium};
  }
`;

class Advertising extends React.Component {
  render() {
    const { adv } = this.props;
    return (
      <Container className="section">
        <div className="container">
          <BreadCrumbs undelineText="Ad" simpleText="vertising" />
          <section className="hero">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">{adv.title}</h1>
                <h2 className="subtitle">
                  {adv.introParagrpah.introParagrpah}
                </h2>
              </div>
            </div>
          </section>
        </div>
      </Container>
    );
  }
}

export default Advertising;
