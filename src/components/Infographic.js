import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  .bottom {
    margin-top: -3px;
  }
  img {
    margin-top: -0.5rem;
  }

  .column.is-4.is-flex {
    padding: 0rem !important;
    height: 25rem;
  }

  .circle {
    /* padding: 6rem 2rem 1rem 3.5rem; */
    background-image: url(/images/circle-icon.jpg);
    background-size: contain;
    background-repeat: no-repeat;
    padding: 32% 20%;
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
                <div className="column is-4 is-flex">
                  <div className="circle">
                    <h1 className="subtitle is-5  has-text-centered">
                      {items}
                    </h1>
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
