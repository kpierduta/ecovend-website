import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import ContactForm from './ContactForm';

const Container = styled.section`
  position: relative;
  font-family: ${props => props.theme.primaryFontFamily} !important;
  background-color: #ffff !important;
  padding-top: 3rem;
  padding-bottom: 3rem;

  @media only screen and (max-width: 768px) {
    padding-bottom: 3rem;
    margin-bottom: -2rem;
  }

  .text {
    color: ${props => props.theme.secondaryColor};
    letter-spacing: 0.1rem;
    line-height: 1.5rem;
  }

  .input {
    height: 2.5rem;
    border-bottom: 1px solid ${props => props.theme.secondaryColor} !important;
    background-color: #fff;
    border-color: #fff;
    box-shadow: none;
    ::placeholder {
      color: ${props => props.theme.secondaryColor};
      opacity: 1;
    }
  }

  textarea {
    border-bottom: 1px solid ${props => props.theme.secondaryColor} !important;
    background-color: #fff;
    border-color: #fff;
    border-radius: none;
    box-shadow: none;
    ::placeholder {
      color: ${props => props.theme.secondaryColor};
      opacity: 1;
    }
  }

  .button {
    font-weight: 400;
    background-color: ${props => props.theme.secondaryColor};
    transition: opacity 0.2s;
    :hover {
      background-color: ${props => props.theme.secondaryColor};
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

const Contact = () => {
  const { contentfulContact } = useStaticQuery(
    graphql`
      query {
        contentfulContact {
          title
          location
          email
          mobileNumber
        }
      }
    `,
  );
  return (
    <Container className="section">
      <div className="container">
        <div className="columns">
          <div className="column has-text-centered">
            <h2 className="title is-3 is-spaced">{contentfulContact.title}</h2>
            <h6 className="subtitle is-6 text">
              <span className="icon">
                <i className="fas fa-map-marker-alt" />
              </span>
              {contentfulContact.location}
            </h6>
            <h6 className="subtitle is-6 text">
              <span className="icon">
                <i className="fas fa-envelope" />
              </span>
              {contentfulContact.email}
            </h6>
            <h6 className="subtitle is-6 text">
              <span className="icon">
                <i className="fas fa-phone" />
              </span>
              {contentfulContact.mobileNumber}
            </h6>
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
};

export default Contact;
