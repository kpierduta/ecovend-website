import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const Conatiner = styled.div`
  background-color: #f1f1f1;
  margin-top: 2rem;
  font-family: ${theme.secondaryFontFamily};
  .title,
  .subtitle {
    color: white !important;
  }
  .column {
    margin-left: 1rem;
    padding: 4rem 0rem;
  }
  .first {
    background-color: ${theme.secondaryColor};
  }
  .second {
    background-color: #c1c107;
  }
  .third {
    background-color: #7fbd1a;
  }
  .fourth {
    background-color: #31a248;
  }
`;

const CaseCard = () => (
  <Conatiner>
    <section className="section">
      <div className="container">
        <div className="columns has-text-centered is-variable is-4">
          <div className="column first">
            <h4 className="title is-4">60</h4>
            <h3 className="subtitle is-3">Unique sites</h3>
          </div>
          <div className="column second">
            <h4 className="title is-4">50</h4>
            <h3 className="subtitle is-3">Waste streams</h3>
          </div>
          <div className="column third">
            <h4 className="title is-4">15,000</h4>
            <h3 className="subtitle is-3">Tons of waste</h3>
          </div>
          <div className="column fourth">
            <h4 className="title is-4">50</h4>
            <h3 className="subtitle is-3">Waste streams</h3>
          </div>
        </div>
      </div>
    </section>
  </Conatiner>
);

export default CaseCard;
