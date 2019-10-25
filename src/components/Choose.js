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

const Choose = () => (
  <Conatiner id="choose">
    <section className="section">
      <div className="container">
        <div className="columns is-centered ">
          <div className="column  is-four-fifths">
            <h1 className="title is-1 has-text-white has-text-centered">
              WHY CHOOSE REVERSE VENDING?
            </h1>
            <div className="columns">
              <div className="column  has-text-centered">
                <img src="/images/icons/earth.png" alt="Save Earth" />
                <h1 className="subtitle is-5 has-text-white has-text-weight-medium">
                  Help save the planet for generation to come
                </h1>
              </div>
              <div className="column has-text-centered">
                <ImageWrapper src="/images/icons/plant.png" alt="Support Us" />
                <h1 className="subtitle is-5 has-text-white has-text-weight-medium ">
                  Support Corporate Social Responsibility
                </h1>
              </div>
              <div className="column has-text-centered">
                <img src="/images/icons/money.png" alt="Attract Customer" />
                <h1 className="subtitle is-5 has-text-white has-text-weight-medium ">
                  Attract and Engage with Customers
                </h1>
              </div>
              <div className="column has-text-centered">
                <ImageWrapper
                  src="/images/icons/business.png"
                  alt="Business Sense"
                />
                <h1 className="subtitle is-5 has-text-white has-text-weight-medium ">
                  It&apos;s good business Sense
                </h1>
              </div>
              <div className="column has-text-centered">
                <ImageWrapper src="/images/icons/sound.png" alt="Revenue" />
                <h1 className="subtitle is-5 has-text-white has-text-weight-medium ">
                  Enjoy an additional revenue stream
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Conatiner>
);

export default Choose;
