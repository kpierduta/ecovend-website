import React from 'react';
import styled from 'styled-components';

import InfoCard from './InfoCard';

const Container = styled.section`
  .bottom {
    margin-top: -3px;
  }
  img {
    margin-top: -0.5rem;
  }
`;

class Infographic extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <Container>
        <div className="section">
          <div className="container">
            <div className="columns is-variable is-0">
              {data.infoGraphics.map(items => (
                <InfoCard data={items} />
              ))}
            </div>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="columns is-multiline is-gapless">
              {data.gallery.map(items => (
                <div className="column is-4">
                  <img src={items.file.url} alt={items.title} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </Container>
    );
  }
}

export default Infographic;
