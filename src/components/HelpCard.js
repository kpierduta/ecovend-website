import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 0rem 1.5rem;
  .card {
    padding: 1rem 1rem;
    background-color: #f1fbff;
  }
  .is-large {
    font-size: 4rem;
  }
  button {
    margin-top: 1rem;
  }
  .arrow {
    margin-left: 0rem !important;
  }
`;

const HelpCard = () => (
  <Section className="sections">
    <div className="container">
      <div className="card has-text-centered">
        <div className="card-image">
          <span className="icon is-large">
            <i className="fas fa-headphones-alt" />
          </span>
          <h1 className="title is-5">Need Help?</h1>
        </div>
        <div className="card-content ">
          <p>Call our award-winning support team 24/7</p>
          <button type="submit" className="button  is-rounded">
            Lerarn More
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
