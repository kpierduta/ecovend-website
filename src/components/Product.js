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
  .has-text-white span {
    background: #4a4a4a;
    padding: 0.25rem 0.5rem;
  }
`;

const Product = ({ data }) => (
  <Container className="section">
    <div className="container">
      <div className="columns is-multiline">
        {data.map(items => (
          <div className="column is-4">
            <div className="box">
              <img
                src={items.node.machineImage.file.url}
                alt={items.node.machineImage.title}
              />
              <h1 className="subtitle is-6 has-text-white">
                <span>ECOVEND</span>
              </h1>
              <h1 className="subtitle is-6 has-text-danger">
                {items.node.machineName}
              </h1>
              <Link
                to={`/machine/${items.node.slug}`}
                className="button is-rounded is-primary"
              >
                MORE INFO
                <span className="icon">
                  <i className="fas fa-chevron-right" />
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Container>
);

export default Product;
