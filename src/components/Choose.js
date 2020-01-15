import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-color: #ededed;
  .section {
    padding: 8rem 0rem;
  }
  .container {
    padding: 7rem 0rem 7rem 0rem;
  }
  .card {
    min-height: 26rem;
    background: transparent;
    border: 1px solid black;
  }
`;

const ImageWrapper = styled.img`
  padding: 1rem 0rem 0rem 0rem;
`;

class Choose extends React.Component {
  render() {
    const { home, choose } = this.props;
    return (
      <Section className="section">
        <div className="container has-text-centered">
          <h1 className="title is-4">{home.chooseTitle}</h1>
          <h1 className="subtitle is-4 has-text-weight-normal">
            {home.chooseSubtitle}
          </h1>
          <div className="columns">
            {choose.map(item => (
              <div className="column has-text-centered">
                <div className="card">
                  <div className="card-image">
                    <figure className="image">
                      <ImageWrapper src={item.file.url} alt="Save Earth" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <h5 className="subtitle is-5 has-text-weight-medium">
                      {item.title}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    );
  }
}

export default Choose;
