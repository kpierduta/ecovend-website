import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const Conatiner = styled.section`
  font-family: ${theme.primaryFontFamily};
  background-color: #e1eff2;

  .column {
    padding: 0 !important;
  }

  .columns {
    margin-left: 0rem !important;
    margin-right: 0rem !important;
  }

  .Heading {
    margin-top: 6rem;
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

  .text-two {
    margin-top: 2rem;
    color: ${theme.secondaryColor};
    font-weight: 200;
    padding-bottom: 10rem;
  }

  .column :last-child {
    background-image: url('/images/customer.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const Customer = () => (
  <Conatiner id="customer-engagement" className="section">
    <div className="container">
      <div className="columns">
        <div className="column">
          <h1 className="Heading">ENGAGING WITH THE CUSTOMER</h1>
          <p className="text">
            Whilst Reverse vending has an impressive proven track record with
            customer take up lets explore why this modern means of recycling is
            making the world think greener.
          </p>
          <p className="text-two">
            With conveniently located RV machines it’s a quick and easy way to
            recycle ‘on the go’.
          </p>
        </div>
        <div className="column" />
      </div>
    </div>
  </Conatiner>
);

export default Customer;
