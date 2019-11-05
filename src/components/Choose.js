import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const Conatiner = styled.div`
  font-family: ${theme.primaryFontFamily};
  background-color: #e90700;
  .columns {
    margin-left: 0rem !important;
    margin-right: 0rem !important;
  }
  .section {
    padding: 8rem 0rem;
  }
`;

const ImageWrapper = styled.img`
  padding: 1rem 0rem 0rem 0rem;
`;

class Choose extends React.Component {
  render() {
    const { home } = this.props;
    return (
      <Conatiner id="choose">
        <section className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column">
                <h1 className="title is-1 has-text-white has-text-centered">
                  {home.chooseTitle}
                </h1>
                <div className="columns">
                  <div className="column  has-text-centered">
                    <img src={home.iconOne.file.url} alt="Save Earth" />
                    <h1 className="subtitle is-5 has-text-white has-text-weight-medium">
                      {home.iconOneText}
                    </h1>
                  </div>
                  <div className="column has-text-centered">
                    <ImageWrapper
                      src={home.iconTwo.file.url}
                      alt="Support Us"
                    />
                    <h1 className="subtitle is-5 has-text-white has-text-weight-medium ">
                      {home.iconTwoText}
                    </h1>
                  </div>
                  <div className="column has-text-centered">
                    <img src={home.iconThree.file.url} alt="Attract Customer" />
                    <h1 className="subtitle is-5 has-text-white has-text-weight-medium ">
                      {home.iconThreeText}
                    </h1>
                  </div>
                  <div className="column has-text-centered">
                    <ImageWrapper
                      src={home.iconFour.file.url}
                      alt="Business Sense"
                    />
                    <h1 className="subtitle is-5 has-text-white has-text-weight-medium ">
                      {home.iconFourText}
                    </h1>
                  </div>
                  <div className="column has-text-centered">
                    <ImageWrapper src={home.iconFive.file.url} alt="Revenue" />
                    <h1 className="subtitle is-5 has-text-white has-text-weight-medium ">
                      {home.iconFiveText}
                    </h1>
                  </div>
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
