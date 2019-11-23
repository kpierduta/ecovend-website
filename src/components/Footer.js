import React from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Conatiner = styled.div`
  background-color: ${props => props.theme.secondaryColor};
  margin-top: -2rem;

  @media only screen and (max-width: 768px) {
    margin-top: 0rem;
  }

  .icon {
    margin-top: 1rem;
    font-size: 2rem;
  }

  svg {
    margin: 0rem 0.5rem 0rem 0.5rem;
  }

  .text {
    margin-top: 3rem;
  }

  .second {
    margin-top: 1rem;
  }
`;

const LinkStyled = styled(AnchorLink)`
  color: #fff;
  :hover {
    color: #fff;
  
`;

const Footer = () => (
  <Conatiner>
    <section className="section">
      <div className="columns is-centered">
        <div className="column  is-10 has-text-centered has-text-white	">
          <h1 className="has-text-weight-medium top ">8700777555</h1>
          <div className="columns second">
            <div className="column">
              <LinkStyled className="has-text-weight-medium">
                POLICIES
              </LinkStyled>
            </div>
            <div className="column">
              <LinkStyled className="has-text-weight-medium">
                TERMS AND CONDITIONS
              </LinkStyled>
            </div>
            <div className="column">
              <LinkStyled className="has-text-weight-medium">
                PRIVACY STATEMENT
              </LinkStyled>
            </div>
            <div className="column">
              <LinkStyled className="has-text-weight-medium">
                OPT OUT FORME
              </LinkStyled>
            </div>
            <div className="column">
              <LinkStyled className="has-text-weight-medium">
                FRANCHISE OPPORTUNITY
              </LinkStyled>
            </div>
          </div>
          <div className="icon">
            <LinkStyled>
              <i className="fab fa-linkedin" />
            </LinkStyled>
            <LinkStyled>
              <i className="fab fa-twitter-square" />
            </LinkStyled>
          </div>
          <p className="has-text-weight-medium text">
            ©2019 by EcoVend Reverse Vending.
          </p>
        </div>
      </div>
    </section>
  </Conatiner>
);

export default Footer;
