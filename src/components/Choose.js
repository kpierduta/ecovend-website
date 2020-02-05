import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-color: #f9f9f9;
  .section {
    padding: 8rem 0rem;
  }
  .card {
    min-height: 28rem;
    background: transparent;
    border: 1px solid black;
  }
  img {
    margin-top: 0.5rem;
    height: 8rem;
  }
`;

class Choose extends React.Component {
  render() {
    const { home } = this.props;
    return (
      <Section className="section">
        <div className="container has-text-centered">
          <h1 className="title is-3">{home.chooseTitle}</h1>
          <h1 className="subtitle is-5 has-text-weight-normal">
            {home.chooseSubtitle}
          </h1>
          <div className="columns is-multiline">
            {home.chooseIcons.map(item => (
              <div className="column is-4 has-text-centered">
                <div className="card">
                  <div className="card-image">
                    <img src={item.file.url} alt="/" />
                  </div>
                  <div className="card-content">
                    <h5 className="subtitle is-5 has-text-weight-bold">
                      {item.title}
                    </h5>
                    <p className="subtitle is-6">{item.description}</p>
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
