import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  .background {
    background-color: ${props => props.theme.lightBackground};
    padding-right: 0rem !important;
  }
  .video {
    width: 100% !important;
  }
`;

class Rvm extends React.Component {
  render() {
    const { adv } = this.props;
    const { hero } = this.props;
    return (
      <Container className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-11 has-text-centered background">
              <h3 className="title is-5 is-spaced is-capitalized  has-text-danger">
                {adv.heroTitle}
              </h3>
              <h3 className="subtitle is-6">{adv.heroSubtitle}</h3>
              <div className="columns">
                {hero.imageGrid.map(item => (
                  <div className="column is-3">
                    <img src={item.file.url} alt={item.file.title} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Rvm;
