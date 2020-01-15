import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .block {
    background-color: ${props => props.theme.secondaryColor};
  }
  .top {
    margin: 4rem;
    @media only screen and (max-width: 768px) {
      margin: 0;
    }
  }
  .text {
    margin-top: 3rem !important;
  }
`;

class Advertisment extends React.Component {
  render() {
    const { home, data } = this.props;
    return (
      <Container>
        <section className="section has-text-centered block">
          <div className="container">
            <h1 className="title is-3 has-text-white has-text-weight-medium">
              {home.marketingTitle}
            </h1>
            <h5 className="subtitle is-6 has-text-white text">
              {home.marketingPara.marketingPara}
            </h5>
            <button className="button is-link is-large">Find out more</button>
          </div>
        </section>
        <section className="section has-text-centered">
          <div className="container">
            <div className="columns">
              {data.map(item => (
                <div className="column">
                  <img src={item.file.url} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </Container>
    );
  }
}

export default Advertisment;
