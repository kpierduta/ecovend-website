import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Conatiner = styled.section`
  background-color: ${props => props.theme.secondaryColor};
  padding-bottom: 0.75rem;
  @media only screen and (max-width: 768px) {
    margin-top: 0rem;
  }
  .subtitle.is-6 {
    font-size: 0.75rem !important;
    line-height: normal;
  }
  .is-size-6,
  .is-6 {
    font-size: 0.75rem !important;
    margin: 0rem 0rem 0.75rem 0rem;
  }
  .is-inline {
    margin: 0.25rem 0.5rem 0.75rem 0rem;
    font-size: 1rem;
  }
  .text {
    margin-top: 0.35rem;
  }
  a{
    color: #fff;
  display: block;
  :hover {
    color: #fff;
  }
`;

const LinkStyled = styled(Link)`
  color: #fff;
  display: block;
  :hover {
    color: #fff;
`;

const Footer = () => (
  <Conatiner className="section">
    <div className="columns is-centered">
      <div className="column  is-10">
        <div className="columns is-variable is-8 second">
          <div className="column">
            <h1 className="title is-5 is-spaced has-text-white">CONTACT</h1>
            <LinkStyled to="/" className="subtitle is-6">
              08700 777 555
            </LinkStyled>
            <LinkStyled to="/" className="subtitle is-6">
              info@eco-vend.co.uk
            </LinkStyled>
            <LinkStyled to="/" className="subtitle is-6">
              ECO House, Lea Road, Waltham
            </LinkStyled>
            <LinkStyled to="/" className="subtitle is-6">
              Abbey, Hertfordshire, EN9 1AS
            </LinkStyled>
          </div>
          <div className="column">
            <h1 className="title is-5 is-spaced has-text-white">SOCIAL</h1>
            <LinkStyled className="is-inline">
              <i className="fab fa-linkedin" />
            </LinkStyled>
            <LinkStyled className="is-inline">
              <i className="fab fa-twitter-square" />
            </LinkStyled>
            <LinkStyled to="/" className="subtitle is-6 text">
              Follow us
            </LinkStyled>
          </div>
          <div className="column">
            <h1 className="title is-5 is-spaced has-text-white">LEGAL</h1>
            <a
              href="./pdf/Privacy-Notice.pdf"
              target="_blank"
              className="is-size-6"
            >
              POLICIES
            </a>
            <a
              href="./pdf/GDPR-PRIVACY-STATEMENT.pdf"
              className="is-size-6"
              target="_blank"
            >
              PRIVACY STATEMENT
            </a>
            <a
              href="./pdf/WEBSITE-TERMS-AND-CONDITIONS.pdf"
              className="is-size-6"
              target="_blank"
            >
              TERMS AND CONDITIONS
            </a>
            <a
              href="./pdf/OPT-OUT-FORM.pdf"
              className="is-size-6"
              target="_blank"
            >
              FRANCHISE OPPORTIUNITY
            </a>
          </div>
        </div>
        <p className="subtitle is-6 has-text-white has-text-centered">
          ©2020 by EcoVend Reverse Vending.
        </p>
      </div>
    </div>
  </Conatiner>
);

export default Footer;
