import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const Section = styled.section`
  padding: 0rem 0.5rem;
  .card {
    padding: 1rem 0rem;
    background-color: ${theme.secondaryColor};
  }
  img {
    width: 4rem;
  }
  button {
    margin-top: 1rem;
  }
  .arrow {
    margin-left: 0rem !important;
  }
  .is-rounded {
    padding: 0rem 1.5rem;
    color: ${theme.secondaryColor} !important;
    background-color: white !important;
  }
`;

const HelpCard = () => (
  <Section className="sections">
    <div className="container">
      <div className="card has-text-centered">
        <div className="card-image">
          <img src="/images/icons/call.png" alt="call-to-get-information" />
        </div>
        <div className="card-content has-text-white">
          <p>Have a question, or need more infotrmation?</p>
          <p>Get in touch today</p>
          <button type="submit" className="button is-rounded is-inverted">
            ENQUIRE
            <span className="icon arrow">
              <i className="fas fa-chevron-right" />
            </span>
          </button>
        </div>
      </div>
    </div>
  </Section>
);
export default HelpCard;
