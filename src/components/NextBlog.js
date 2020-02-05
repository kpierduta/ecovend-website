import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import config from '../utils/config';

const Container = styled.section`
  font-family: ${props => props.theme.primaryFontFamily};
  padding-bottom: 3.5rem;
  .columns {
    margin-top: 1rem;
  }
  .title.is-5 {
    padding-top: 2rem;
    color: ${props => props.theme.secondaryColor};
  }
  .social {
    margin-top: 1.5rem !important;
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

const NextBlog = ({ news, previous }) => {
  const metaUrl = `${config.siteUrl}/blog/${previous.slug}`;
  const metaTitle = `Checkout ${previous.newsTitle}`;

  console.log(metaUrl);

  return (
    <Link to={`/blog/${news.slug}`}>
      <Container className="container">
        <div className="columns">
          <div className="column first">
            <h1 className="title is-5">SHARE THIS POST</h1>
            <FacebookShareButton
              url={metaUrl}
              quote={metaTitle}
              hashtag="#eco-vend"
            >
              <p className="title is-6">Facebook</p>
            </FacebookShareButton>
            <div className="social">
              <TwitterShareButton
                url={metaUrl}
                quote={metaTitle}
                hashtag="#eco-vend"
              >
                <p className="title is-6">Twitter</p>
              </TwitterShareButton>
            </div>
          </div>
          <div className="column second">
            <article className="media">
              <figure className="media-left">
                <p className="image">
                  <img
                    src={news.thumbnail.file.url}
                    alt={news.thumbnail.title}
                  />
                </p>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p className="subtitle is-4 has-text-white">Next Blog</p>
                  <p className="subtitle is-4 has-text-white">
                    {news.newsTitle}
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </Link>
  );
};
export default NextBlog;
