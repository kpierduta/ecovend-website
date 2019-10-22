import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const Conatiner = styled.section`
  font-family: ${theme.primaryFontFamily};
  font-size: 15px;
  background-color: #e1eff2;
  padding-bottom: 0.5rem;
  .column {
    padding: 0 !important;
  }
  .columns {
    margin-left: 0rem !important;
    margin-right: 0rem !important;
  }
  .section {
    padding: 10rem 5rem 3rem 5.5rem;
  }
  .Heading {
    font-size: ${theme.fontSizeMedium};
    margin-bottom: 4rem;
    font-weight: 500;
    color: ${theme.secondaryColor};
  }
  .text {
    margin-top: 2rem;
    color: ${theme.secondaryColor};
    font-weight: 200;
    line-height: 1.5;
  }
  .content {
    margin-top: 2rem;
    color: ${theme.secondaryColor};
    font-weight: 200;
    padding-bottom: 10rem;
  }
  .content li {
    margin-top: 2rem;
  }
  .column :last-child {
    background-image: url('/images/customer.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
`;

const Customer = () => (
  <Conatiner id="customer-engagement">
    <div>
      <div className="columns">
        <div className="column">
          <section className="section">
            <div className="container">
              <h1 className="Heading">
                REVERSE VENDING IS REALLY MAKING A DIFFERENCE
              </h1>
              <p className="text">
                Reverse vending has an impressive proven track record with
                customer take up. Here's why reverse vending is making the world
                think and act greener.
              </p>
              <div className="content">
                <ul type="*">
                  <li>
                    With conveniently located RV machines it’s easy way to
                    recycle ‘on the go.’
                  </li>
                  <li>
                    It’s fast and clean which motivates repeated use in
                    combination with the instant reward.
                  </li>
                  <li>
                    Not only are customers instantly rewarded for their efforts
                    with a voucher, payment or charity donation they’ll also
                    benefit from the satisfaction of knowing their bottle will
                    go on to have many lives.
                  </li>
                  <li>
                    With less plastic on our streets everyone benefits from a
                    cleaner environment.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <div className="column" />
      </div>
    </div>
  </Conatiner>
);

export default Customer;
