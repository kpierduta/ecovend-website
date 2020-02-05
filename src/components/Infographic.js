import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  .bottom {
    margin-top: -3px;
  }
  img {
    margin-top: -0.5rem;
  }
  .circle {
    border: 2px solid #f38044;
    min-height: 20.5rem;
    padding: 7rem 1rem 0rem 1rem;
    border-radius: 100%;
  }
`;

class Infographic extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <Container>
        <div className="section">
          <div className="container">
            <div className="columns">
              {data.infoGraphicsPoint.map(items => (
                <div className="column is-4 has-text-centered">
                  <div className="circle">
                    <h1 className="subtitle is-5">{items}</h1>
                  </div>
                </div>
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
