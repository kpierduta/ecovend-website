import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.section`
  font-family: ${props => props.theme.primaryFontFamily};

  img {
    display: block;
    height: 25rem;
  }

  .icon {
    padding-left: 1rem;
    color: #ffff;
  }
`;

const Product = () => (
  <Container className="section">
    <div className="container">
      <div className="columns">
        <div className="column">
          <div className="box">
            <img
              src="/images/machines/ecovend-machine_100-200-300.png"
              alt="recycle machine"
            />
            <h1 className="subtitle is-6 has-text-danger">RVM 100/200/300</h1>
            <Link to="/our-product" className="button is-rounded is-primary">
              MORE INFO
              <span className="icon">
                <i className="fas fa-chevron-right" />
              </span>
            </Link>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <img
              src="/images/machines/ecovend-machine_350.png"
              alt="recycle machine"
            />
            <h1 className="subtitle is-6 has-text-danger">RVM 350</h1>
            <Link to="/our-product" className="button is-rounded is-primary">
              MORE INFO
              <span className="icon">
                <i className="fas fa-chevron-right" />
              </span>
            </Link>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <img
              className="image"
              src="/images/machines/ecovend-machine_400.png"
              alt="Recycling Machine"
            />
            <h1 className="subtitle is-6 has-text-danger">RVM 400</h1>
            <Link to="/our-product" className="button is-rounded is-primary">
              MORE INFO
              <span className="icon">
                <i className="fas fa-chevron-right" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default Product;
