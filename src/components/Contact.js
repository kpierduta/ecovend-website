import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import ContactForm from './ContactForm';

const Container = styled.section`
  position: relative;
  background-color: #ffff !important;
  padding-top: 3rem;
  padding-bottom: 3rem;

  @media only screen and (max-width: 768px) {
    padding-bottom: 3rem;
    margin-bottom: -2rem;
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
    margin: 0rem 0.25rem 1rem 0rem !important;
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
    <Container id="contact" className="section">
      <div className="container">
        <div className="columns has-text-centered">
          <div className="column">
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
          <div className="column is-7">
            <h2 className="title is-3 is-spaced">
              Get in touch to find out more
            </h2>
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
