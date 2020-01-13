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
    line-height: normal;
  }
  .is-size-6,
  .is-6 {
    margin: 0rem 0rem 0.75rem 0rem;
  }
  .is-inline {
    margin: 0rem 0.5rem 0.75rem 0rem;
    font-size: 2rem;
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
        <div className="columns second">
          <div className="column">
            <h1 className="title is-5 is-spaced has-text-white">CONTACT</h1>
            <LinkStyled to="/" className="subtitle is-6">
              08700 777 555
            </LinkStyled>
            <LinkStyled to="/" className="subtitle is-6">
              info@eco-vend.co.uk
            </LinkStyled>
            <LinkStyled to="/" className="subtitle is-6">
              ECO House, Lea Road, Waltham Abbey,
            </LinkStyled>
            <LinkStyled to="/" className="subtitle is-6">
              Hertfordshire, EN9 1AS
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

            <LinkStyled to="/" className="subtitle is-6">
              Follow us
            </LinkStyled>
          </div>
          <div className="column">
            <h1 className="title is-5 is-spaced has-text-white">LEGAL</h1>
            <LinkStyled className="is-size-6">POLICIES</LinkStyled>
            <LinkStyled className="is-size-6">PRIVACY STATEMENT</LinkStyled>
            <LinkStyled className="is-size-6">TERMS AND CONDITIONS</LinkStyled>
            <LinkStyled className="is-size-6">
              FRANCHISE OPPORTIUNITY
            </LinkStyled>
          </div>
        </div>
        <p className="subtitle is-6 has-text-white has-text-centered">
          ©2019 by EcoVend Reverse Vending.
        </p>
      </div>
    </div>
  </Conatiner>
);

export default Footer;
