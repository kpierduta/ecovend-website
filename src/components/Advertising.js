import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const Conatiner = styled.div`
  font-family: ${theme.primaryFontFamily};
  background-color: ${theme.secondaryColor};

  .columns {
    margin-left: 0rdem !important;
    margin-right: 0rem !important;
  }

  .section {
    padding: 3rem 1.5rem 0rem 1.5rem;
  }

  .top {
    margin: 4rem;
  }

  .text {
    margin-top: 3rem;
    line-height: 2;
  }

  .photos {
    margin-top: 3.5rem !important;
  }

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
`;

const Advertisment = () => (
  <Conatiner id="advertising">
    <section className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-two-thirds has-text-centered has-text-white top">
            <h1 className="has-text-weight-medium">
              BRAND MESSAGING, ADVERTISING IT&apos;S YOUR CHOICE?
            </h1>
            <p className="text">
              Our audio visual video campaign is designed to engage, educate and
              influence the perception of waste and encourage accountability and
              positive motivation. These videos are supplied with each AV
              machine and can be easily customised to accommodate the buyers
              desired brand messaging or advertising needs.
            </p>
          </div>
        </div>
      </div>
    </section>
    <div className="columns is-multiline photos">
      <div className="column is-4 is-gapless is-marginless is-paddingless">
        <img src="/images/advertisment-one.jpg" alt="#" />
      </div>
      <div className="column is-4 is-paddingless">
        <img src="/images/advertisment-two.jpg" alt="#" />
      </div>
      <div className="column is-4 is-paddingless">
        <img src="/images/advertisment-three.jpg" alt="#" />
      </div>
      <div className="column is-4 is-paddingless">
        <img src="/images/advertisment-four.jpg" alt="#" />
      </div>
      <div className="column is-4 is-paddingless">
        <img src="/images/advertisment-five.jpg" alt="#" />
      </div>
      <div className="column is-4 is-paddingless">
        <img src="/images/advertisment-six.jpg" alt="#" />
      </div>
    </div>
  </Conatiner>
);

export default Advertisment;
