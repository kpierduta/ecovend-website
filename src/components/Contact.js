import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import ContactForm from './ContactForm';
import MyMapComponent from './GoogleMap';

const Container = styled.section`
  @media only screen and (max-width: 768px) {
    padding-bottom: 3rem;
    margin-bottom: -2rem;
  }
  .text {
    padding: 0rem 0.5rem;
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

  .map {
    padding-bottom: 0rem;
  }

  .button {
    margin-left: 0.5rem;
  }

  .textarea,
  .first {
    padding-left: 0rem;
  }

  form,
  .field {
    width: 100%;
  }
  .form-box {
    margin-top: 0.75rem;
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
    <Container className="section" id="contact">
      <div className="container">
        <div className="columns">
          <div className="column is-3 first">
            <h2 className="title is-5 is-spaced">{contentfulContact.title}</h2>
            <span className="icon has-text-danger">
              <i className="fas fa-map-marker-alt" />
            </span>
            <h6 className="subtitle is-6 has-text-danger">
              <span className="is-block">ECO House,</span>
              <span className="is-block">Lea Road,</span>
              <span className="is-block">Waltham Abbey,</span>
              <span className="is-block">Hertfordshire,</span>
              <span>EN9 1AS</span>
              {/*
          {contentfulContact.location}
          */}
            </h6>
            <span className="icon has-text-danger">
              <i className="fas fa-envelope" />
            </span>
            <a
              href="mailto:"
              className="subtitle is-6 has-text-danger is-block"
            >
              {contentfulContact.email}
            </a>
            <span className="icon">
              <i className="fas fa-phone has-text-danger" />
            </span>
            <a href="tel:" className="subtitle is-6 has-text-danger is-block">
              {contentfulContact.mobileNumber}
            </a>
          </div>
          <div className="column is-5 map">
            <MyMapComponent isMarkerShown className="is-hidden-mobile" />
          </div>
          <div className="column  form-box">
            <div className="text">
              <h2 className="title is-5 is-spaced">
                Get in touch to find out more
              </h2>
            </div>
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
