import React from 'react';
import styled from 'styled-components';

import BreadCrumbs from './BreadCrumbs';

const Container = styled.section`
  font-family: ${props => props.theme.primaryFontFamily};
`;

class Advertising extends React.Component {
  render() {
    const { adv } = this.props;
    return (
      <React.Fragment>
        <BreadCrumbs undelineText="Ad" simpleText="vertising" />
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="subtitle is-6">{adv.title}</h1>
              <h5 className="subtitle is-6">
                {adv.introParagrpah.introParagrpah}
              </h5>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Advertising;
