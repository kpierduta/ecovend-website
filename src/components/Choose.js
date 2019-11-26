import React from 'react';
import styled from 'styled-components';

const Conatiner = styled.div`
  background-color: #e90700;

  .section {
    padding: 8rem 0rem;
  }
`;

const ImageWrapper = styled.img`
  padding: 1rem 0rem 0rem 0rem;
`;

class Choose extends React.Component {
  render() {
    const { home, choose } = this.props;
    return (
      <Conatiner>
        <section className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column">
                <h1 className="title is-3 has-text-white has-text-centered">
                  {home.chooseTitle}
                </h1>
                <div className="columns">
                  {choose.map(item => (
                    <div className="column  has-text-centered">
                      <ImageWrapper
                        src={item.node.image.file.url}
                        alt="Save Earth"
                      />
                      <h5 className="subtitle is-5 has-text-white has-text-weight-medium">
                        {item.node.title}
                      </h5>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Conatiner>
    );
  }
}

export default Choose;
