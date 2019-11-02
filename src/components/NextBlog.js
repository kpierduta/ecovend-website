import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const Container = styled.section`
  font-family: ${theme.primaryFontFamily};
  padding-bottom: 3.5rem;
  .columns {
    margin-top: 1rem;
  }
  .title.is-5 {
    padding-top: 2rem;
    color: ${theme.secondaryColor};
  }
  .para {
    padding: 0rem 0rem 1rem 0rem;
  }
  img {
    height: 14rem;
    width: 19rem;
  }
  .first {
    background-color: #f7f7f7;
  }
  .second {
    background-color: #636362;
  }
`;

const NextBlog = () => (
  <Container>
    <div className="container">
      <div className="columns">
        <div className="column first">
          <h1 className="title is-5">SHARE THIS POST</h1>
          <p className="title is-6">Facebbok</p>
          <p className="title is-6">Twitter</p>
        </div>
        <div className="column second">
          <article className="media">
            <figure className="media-left">
              <p className="image">
                <img src="/images/news/two.jpg" />
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <p className="subtitle is-2 has-text-white">Next Blog</p>
                <p className="subtitle is-4 has-text-white">
                  Updates regarding EcoVend
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </Container>
);

export default NextBlog;
