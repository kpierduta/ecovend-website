import React from 'react';
import styled from 'styled-components';

import BreadCrumbs from './BreadCrumbs';

const Container = styled.section`
  font-family: ${props => props.theme.primaryFontFamily};
  .hero-body {
    padding: 3rem 0rem;
  }
  .title {
    padding-bottom: 1rem;
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
                <h2 className="title is-3">{adv.title}</h2>
                <h5 className="subtitle is-5">
                  {adv.introParagrpah.introParagrpah}
                </h5>
              </div>
            </div>
          </section>
        </div>
      </Container>
    );
  }
}

export default Advertising;
