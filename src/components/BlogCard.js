import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const Section = styled.section`
  font-family: ${theme.primaryFontFamily};
  padding: 0rem 0.5rem 2rem 0.5rem;
  .card {
    box-shadow: none;
  }
  .image img {
    height: 14rem;
  }
  .image.is-128x128 {
    width: 313px;
  }
  .button {
    font-weight: 400;
    background-color: ${theme.secondaryColor};
    transition: opacity 0.2s;
    :hover {
      background-color: ${theme.secondaryColor};
      color: #fff;
      opacity: 0.6;
    }
  }
  .icon {
    margin-left: 0rem !important;
  }
`;

const BlogCard = () => (
  <Section className="section">
    <div className="container">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-128x128">
                <img src="/images/Advertisment-three.jpg" />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>Business / September 28, 2018</p>
                <h1 className="title is-4">Updates regarding Eco-vend</h1>
                <p>
                  Nunc tristique tellus quam, id ultrices urna rhoncus non. Cras
                  rhoncus interdum arcu eget congue. Curabitur non justo
                  velit....
                </p>
                <button type="submit" className="button is-rounded">
                  Lerarn More
                  <span className="icon">
                    <i className="fas fa-chevron-right" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default BlogCard;
