import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';
import ResultStep from './ResultStep';
import ResultCounter from './ResultCounter';

const Container = styled.section`
  font-family: ${theme.primaryFontFamily};
  .title.is-2 {
    padding-top: 2rem;
    color: ${theme.secondaryColor};
  }
  .para {
    padding: 0rem 0rem 1rem 0rem;
  }
`;

const Wrapper = styled.div`
  border-top: 4px solid ${theme.secondaryColor};
`;

const Bottom = styled.div`
  border-bottom: 4px solid ${theme.secondaryColor};
  margin-top: 2rem;
  padding-bottom: 2rem;
`;

const Result = () => (
  <Container className="section">
    <div className="container">
      <Wrapper className="columns is-multiline">
        <div className="column is-8">
          <h1 className="title is-2">Result</h1>
          <p className="para">
            The environmental performance of Brakes waste and recycling
            operation is improving year on year, and the latest figures from
            ACM’s Environmental Services Portal, show that ACM is helping Brakes
            divert a staggering 100% of their waste from landfill since 2018
            with 79% of waste being recycled and reused. Brakes’ Fareshare
            network has played a vital role in preventing 500 tonnes of food
            from being sent to landfill, minimizing their carbon footprint even
            further.
          </p>
          <p className="para">
            Alongside all of Brakes Group’s powerful environmental initiatives,
            ACM have assisted in Brakes’ aim to further improve environmental
            performance and generate further cost savings by reducing the amount
            of waste sent to recovery by the end of 2017 through additional
            training with Brakes staff and improving the in-house segregation of
            the waste. The latest figures report only 21% of all Brakes’ waste
            is being sent to recovery.
          </p>
        </div>
        <div className="column is-4">
          <img src="/images/case/ceo.jpg" alt="Ceo Initiative" />
        </div>
        <div className="column is-12">
          <p className="para">
            In May 2017, Brakes and ACM were delighted to be finalists for the
            MRW National Recycling awards for Business Partnership of the Year
            category. Speaking of the partnership and results achieved, Steve
            Webster, Indirect Goods & Services Manager at Brakes, said: “We have
            been working in partnership with ACM Environmental for a number of
            years and together have ensured we reach our optimum environmental
            performance.”
          </p>
          <p className="para">
            In May 2018, ACM and Brakes were victorious in the Waste Reduction
            Initiative – Commercial category and were highly praised by the
            judging panel, which said “Our judges said the winners have done
            something different, thought outside the box, put clear processes in
            place and taken the business to the next level.”
          </p>
          <p className="para">
            In June 2018, Brakes also released their CSR 2Zero20 campaign, with
            the aim to eliminate all non-recyclable hard black plastics by 2020
            and communicate with suppliers to prevent the production of
            unnecessary single use items. Brakes and ACM have been working
            together in order to provide informative advice an consultation with
            Brakes’ supply chain to reach their CSR goals.
          </p>
          <p className="para">
            Through their forward-thinking and ongoing work at all 60 Brakes
            Group sites across the country, ACM are able to work alongside
            Brakes to provide a fully managed, complete, single source waste and
            recycling solution for their business.
          </p>
        </div>
      </Wrapper>
      <Bottom className="columns is-multiline is-mobile">
        <div className="column is-3">
          <ResultCounter text="1" />
          <ResultStep text="In May 2017, Brakes and ACM are finalist for the MRW National Recycling award for business partnership of the Year award" />
        </div>
        <div className="column is-3">
          <ResultCounter text="2" />
          <ResultStep text="In May 2017, Brakes and ACM are finalist for the MRW National Recycling award for business partnership of the Year award" />
        </div>
        <div className="column is-3">
          <ResultCounter text="3" />
          <ResultStep text="In May 2017, Brakes and ACM are finalist for the MRW National Recycling award for business partnership of the Year award" />
        </div>
        <div className="column is-3">
          <ResultCounter text="4" />
          <ResultStep text="In May 2017, Brakes and ACM are finalist for the MRW National Recycling award for business partnership of the Year award" />
        </div>
      </Bottom>
    </div>
  </Container>
);

export default Result;
