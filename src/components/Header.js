import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import theme from '../utils/theme';

const Navbar = styled.div`
  font-family: ${theme.primaryFontFamily}!important;
  padding-bottom: 1rem;
  .navbar-item img {
    max-height: 107px;
  }
  .is-active {
    color: ${theme.secondaryColor}!important;
    @media only screen and (max-width: 768px) {
      color: black !important;
    }
  }
  .navbar-item {
    transition: color 0.2s;
    :hover {
      background: transparent;
      color: ${theme.hovercolor}!important;
    }
    :focus-within {
      background: transparent;
      color: ${theme.primaryColor};
    }
  }
  .navbar-end {
    @media only screen and (max-width: 768px) {
      text-align: center;
    }
  }
  .navbar-dropdown {
    margin-top: -2rem;
    @media only screen and (max-width: 768px) {
      margin-top: unset;
    }
  }
`;

const LinkStyled = styled(Link)`
  color: ${theme.primaryColor};
  font-size: ${theme.fontSize};
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: false,
    };
  }

  Menu = () => {
    const { view } = this.state;
    this.setState({
      view: !view,
    });
  };

  render() {
    const { view } = this.state;
    return (
      <Navbar className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <a href="/" className="navbar-item">
              <img className="logo" src="/images/logo.png" alt="ecovend-logo" />
            </a>
            <a
              className={view ? 'navbar-burger is-active' : 'navbar-burger '}
              aria-label="menu"
              aria-expanded="false"
              onClick={() => this.Menu()}>
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div
            id="navbarBasicExample"
            className={view ? 'navbar-menu is-active' : 'navbar-menu '}>
            <div className="navbar-end">
              <LinkStyled to="/" className="navbar-item">
                Home
              </LinkStyled>
              <LinkStyled to="/advertising" className="navbar-item ">
                Advertising
              </LinkStyled>
              <LinkStyled to="/our-range" className="navbar-item">
                Our Range
              </LinkStyled>
              <LinkStyled to="/news" className="navbar-item">
                News
              </LinkStyled>
              <LinkStyled to="/case" className="navbar-item">
                Case Studies
              </LinkStyled>
              <LinkStyled to="/faq" className="navbar-item">
                FAQ
              </LinkStyled>
              <LinkStyled to="/contact" className="navbar-item ">
                Contact
              </LinkStyled>
            </div>
          </div>
        </div>
      </Navbar>
    );
  }
}
