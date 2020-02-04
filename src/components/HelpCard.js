import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Section = styled.section`
  margin-top: 3rem;
  .card {
    padding: 1rem 0rem;
    background-color: ${props => props.theme.secondaryColor};
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
    color: ${props => props.theme.secondaryColor} !important;
    background-color: white !important;
  }
  .subtitle.is-6 {
    line-height: normal;
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
          <h2 className="subtitle is-6 has-text-white">
            Have a question, or need more information?
          </h2>
          <h2 className="subtitle is-6 has-text-white">Get in touch today</h2>
          <Link to="/contact" className="button is-rounded is-inverted">
            ENQUIRE
            <span className="icon arrow">
              <i className="fas fa-chevron-right" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  </Section>
);
export default HelpCard;
