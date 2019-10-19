import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const Section = styled.section`
  font-family: ${theme.primaryFontFamily};
  padding: 0rem 0.5rem 2rem 0.5rem;
  .text {
    color: ${theme.secondaryColor};
    font-size: 1rem;
  }
`;

const NewsPosts = () => (
  <Section className="section">
    <div className="container">
      <article className="media">
        <figure className="media-left">
          <p className="image  is-96x96">
            <img
              className="is-rounded"
              src="https://bulma.io/images/placeholders/64x64.png"
            />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p className="text has-text-weight-bold">
              Liberalisation of air cargo
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </article>
    </div>
  </Section>
);

export default NewsPosts;
