import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const Conatiner = styled.div`
  font-family: ${theme.secondaryFontFamily};
  color: ${theme.primaryColor};
  padding-bottom: 10rem;
  .columns {
    margin-left: 0rem !important;
    margin-right: 0rem !important;
  }
  .text {
    color: ${theme.primaryColor};
    margin-top: 10rem;
    font-weight: 500;
    font-size: ${theme.fontSizeMedium};
    @media only screen and (max-width: 768px) {
      margin-top: 5rem;
    }
  }
  .sub-text {
    line-height: 1.75rem;
    font-size: ${theme.fontSize};
  }
  .first {
    margin-top: 3.95rem;
  }
  .second {
    margin-top: 2rem;
  }
  iframe {
    margin-top: 1rem;
    width: 30.3125rem;
    height: 21.875rem;
  }
`;

const DrsInfo = () => (
  <Conatiner id="drs" className="container">
    <div className="columns  is-centered is-multiline has-text-centered">
      <div className="column is-two-thirds">
        <h4 className="subtitle is-4 text">
          HOW ARE REVERSE VENDING MACHINES BEING USED?
        </h4>
        <p className="sub-text first">
          RVMs have gained signiﬁcant popularity in the last ﬁve years.
          Impressive levels of user engagement across Europe has led to up to
          97% beverage container recycling waste in some countries.
        </p>
        <p className="sub-text second">
          Reverse vending is particularly popular in places that have mandatory
          recycling laws or container deposit legislation. The UK government has
          recently announced plans for a national deposit return scheme which
          will begin in 2020-21.
        </p>
      </div>
    </div>
    <div className="has-text-centered">
      <iframe src="/videos/ACM_Reverse_Vending_on_the_BBC.mp4" />
    </div>
  </Conatiner>
);

export default DrsInfo;
