import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import ContactForm from './ContactForm';

const Container = styled.section`
  position: relative;
  padding-top: 3rem;
  padding-bottom: 3rem;

  @media only screen and (max-width: 768px) {
    padding-bottom: 3rem;
    margin-bottom: -2rem;
  }

  .first {
    padding-left: 0rem !important;
  }

  .input {
    padding: 0;
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
    background-color: #fff;
    border-color: #fff;
    border-radius: none;
    box-shadow: none;
    ::placeholder {
      color: ${props => props.theme.secondaryColor};
      opacity: 1;
    }
    :hover {
      border-color: #fff;
    }
  }

  .control {
    padding: 0.5rem;
    :hover {
      border-color: #fff;
    }
  }
  .button {
    margin: 0rem 0.75rem;
  }

  form,
  .field {
    width: 100%;
  }
  .form-box {
    border: 2px solid ${props => props.theme.secondaryColor};
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
    <Container className="columns">
      <div className="column first">
        <h2 className="title is-3 is-spaced">{contentfulContact.title}</h2>
        <span className="icon has-text-danger">
          <i className="fas fa-map-marker-alt" />
        </span>
        <h6 className="subtitle is-6 has-text-danger">
          {contentfulContact.location}
        </h6>
        <span className="icon has-text-danger">
          <i className="fas fa-envelope" />
        </span>
        <h6 className="subtitle is-6 has-text-danger">
          {contentfulContact.email}
        </h6>
        <span className="icon">
          <i className="fas fa-phone has-text-danger" />
        </span>
        <h6 className="subtitle is-6 has-text-danger">
          {contentfulContact.mobileNumber}
        </h6>
      </div>
      <div className="column is-6 form-box">
        <h2 className="title is-3 is-spaced">Get in touch to find out more</h2>
        <div className="field is-horizontal">
          <div className="field-body">
            <ContactForm />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
