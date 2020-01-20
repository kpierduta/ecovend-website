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
      <Container className="hero">
        <BreadCrumbs undelineText="Ad" simpleText="vertising" />
        <div className="hero-body">
          <div className="container">
            <h1 className="subtitle is-6">{adv.title}</h1>
            <h5 className="subtitle is-6">
              {adv.introParagrpah.introParagrpah}
            </h5>
          </div>
        </div>
      </Container>
    );
  }
}

export default Advertising;
