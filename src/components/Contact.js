import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';
import ContactForm from './ContactForm';

const Container = styled.section`
  position: relative;
  font-family: ${theme.primaryFontFamily} !important;
  background-color: #ffff !important;
  padding-top: 3rem;
  padding-bottom: 3rem;
  @media only screen and (max-width: 768px) {
    padding-bottom: 3rem;
    margin-bottom: -2rem;
  }
  .text {
    color: ${theme.secondaryColor};
    letter-spacing: 0.1rem;
    line-height: 1.5rem;
  }
  .input {
    height: 2.5rem;
    border-bottom: 1px solid ${theme.secondaryColor} !important;
    background-color: #fff;
    border-color: #fff;
    box-shadow: none;
    ::placeholder {
      color: ${theme.secondaryColor};
      opacity: 1;
    }
  }
  textarea {
    border-bottom: 1px solid ${theme.secondaryColor} !important;
    background-color: #fff;
    border-color: #fff;
    border-radius: none;
    box-shadow: none;
    ::placeholder {
      color: ${theme.secondaryColor};
      opacity: 1;
    }
  }
  .button {
    font-weight: 400;
    background-color: ${theme.secondaryColor};
    transition: opacity 0.2s;
    :hover {
      background-color: ${theme.secondaryColor};
      color: #fff;
      opacity: 0.6;
    }
  }
  .control {
    padding: 1rem;
    :hover {
      border-color: #fff;
    }
  }
  form,
  .field {
    width: 100%;
  }
  .icon {
    margin-left: 0rem !important;
    margin-right: 0.25rem !important;
  }
`;

const Contact = () => (
  <Container className="section">
    <div className="container">
      <div className="columns">
        <div className="column has-text-centered">
          <h1 className="subtitle is-3">Our Address</h1>
          <h4 className="subtitle is-6 text">
            <span className="icon">
              <i className="fas fa-map-marker-alt" />
            </span>
            ECO House, Lea Road, Waltham Abbey, Hertfordshire, EN9 1AS
          </h4>
          <h4 className="subtitle is-6 text">
            <span className="icon">
              <i className="fas fa-envelope" />
            </span>
            info@eco-vend.co.uk
          </h4>
          <h4 className="subtitle is-6 text">
            <span className="icon">
              <i className="fas fa-phone" />
            </span>
            08700 777 555
          </h4>
        </div>
        <div className="column is-7">
          <div className="field is-horizontal">
            <div className="field-body">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default Contact;
