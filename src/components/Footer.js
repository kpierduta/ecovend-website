import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Conatiner = styled.div`
  background-color: ${props => props.theme.secondaryColor};
  margin-top: -2.5rem;

  @media only screen and (max-width: 768px) {
    margin-top: 0rem;
  }

  .subtitle.is-6 {
    line-height: normal;
  }

  .is-size-6 {
    margin: 0rem 0rem 1rem 0rem;
  }

  .icon {
    margin: 0rem 0rem 2.5rem 0rem;
    font-size: 2rem;
  }

  svg {
    margin: 0rem 0.5rem 0rem 0.5rem;
  }

  .top {
    margin-top: 4rem;
  }
`;

const LinkStyled = styled(Link)`
  color: #fff;
  display: block;
  :hover {
    color: #fff;
  
`;

const Footer = () => (
  <Conatiner>
    <section className="section">
      <div className="columns is-centered">
        <div className="column  is-12 has-text-centered ">
          <div className="columns second">
            <div className="column">
              <h1 className="title is-5 is-spaced has-text-white">CONTACT</h1>
              <LinkStyled to="/" className="subtitle is-6">
                8700777555
              </LinkStyled>
              <LinkStyled to="/" className="subtitle is-6">
                info@eco-vend.co.uk
              </LinkStyled>
              <LinkStyled to="/" className="subtitle is-6">
                ECO House, Lea Road, Waltham Abbey, Hertfordshire, EN9 1AS
              </LinkStyled>
            </div>
            <div className="column">
              <h1 className="title is-5 is-spaced has-text-white">SOCIAL</h1>
              <div className="icon">
                <LinkStyled>
                  <i className="fab fa-linkedin" />
                </LinkStyled>
                <LinkStyled>
                  <i className="fab fa-twitter-square" />
                </LinkStyled>
              </div>
              <LinkStyled to="/" className="subtitle is-6">
                Follow us
              </LinkStyled>
            </div>
            <div className="column">
              <h1 className="title is-5 is-spaced has-text-white">LEGAL</h1>
              <LinkStyled className="is-size-6">POLICIES</LinkStyled>
              <LinkStyled className="is-size-6">PRIVACY STATEMENT</LinkStyled>
              <LinkStyled className="is-size-6">
                TERMS AND CONDITIONS
              </LinkStyled>
              <LinkStyled className="is-size-6">
                FRANCHISE OPPORTIUNITY
              </LinkStyled>
            </div>
          </div>
          <p className="subtitle is-6 has-text-white top">
            ©2019 by EcoVend Reverse Vending.
          </p>
        </div>
      </div>
    </section>
  </Conatiner>
);

export default Footer;
