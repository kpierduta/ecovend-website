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
  .form-box {
    margin-top: 0.75rem;
    border: 2px solid ${props => props.theme.secondaryColor};
  }
  .text {
    padding: 0rem 0.5rem;
  }
  .map {
    padding-bottom: 0rem !important;
  }
`;

const Contact = ({ isHidden }) => {
  const { contentfulContact } = useStaticQuery(
    graphql`
      query {
        contentfulContact {
          title
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
            </h6>
            <span className="icon has-text-danger">
              <i className="fas fa-envelope" />
            </span>
            <a
              href={`mailto:${contentfulContact.email}`}
              className="subtitle is-6 has-text-danger is-block"
            >
              {contentfulContact.email}
            </a>
            <span className="icon">
              <i className="fas fa-phone has-text-danger" />
            </span>
            <a
              href={`tel:${contentfulContact.mobileNumber}`}
              className="subtitle is-6 has-text-danger is-block"
            >
              {contentfulContact.mobileNumber}
            </a>
          </div>
          <div className={isHidden ? 'column is-9 map' : 'column is-5 map'}>
            <MyMapComponent isMarkerShown className="is-hidden-mobile" />
          </div>
          <div className={isHidden ? 'is-hidden' : 'column  form-box'}>
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
