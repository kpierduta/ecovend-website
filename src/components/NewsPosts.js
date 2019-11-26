import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  font-family: ${props => props.theme.primaryFontFamily};
  padding: 0rem 0.5rem 2rem 0.5rem;
  .text {
    color: ${props => props.theme.secondaryColor};
    font-size: 1rem;
  }

  .subtitle.is-5 {
    line-height: normal;
  }

  .subtitle.is-6 {
    line-height: normal;
  }
`;

const NewsPosts = props => (
  <Section className="section">
    <div className="container">
      <article className="media">
        <figure className="media-left">
          <p className="image is-96x96">
            <img className="is-rounded" src={props.image} alt={props.alt} />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <h1 className="subtitle is-5 text has-text-weight-bold">
              Liberalisation of air cargo
            </h1>
            <h2 className="subtitle is-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h2>
          </div>
        </div>
      </article>
    </div>
  </Section>
);

export default NewsPosts;
