import React from 'react';
import styled from 'styled-components';

import BlogCard from './BlogCard';
import NewsPosts from './NewsPosts';
import HelpCard from './HelpCard';

import theme from '../utils/theme';

const Section = styled.section`
  font-family: ${theme.primaryFontFamily} !important;
  margin-bottom: 4rem;
  .input {
    border-radius: 2rem;
  }
  p {
    font-size: 0.92rem;
  }
  .button {
    font-family: ${theme.primaryFontFamily}
    font-size: 1rem;
    color: #fff;
    background-color: ${theme.secondaryColor};
    transition: opacity 0.2s;
    :hover {
      background-color: ${theme.secondaryColor};
      color: #fff;
      opacity: 0.6;
    }
  }
  .search {
    padding: 2rem;
  }
  .posts {
    margin-top: 4rem;
  }
  .menu-list li ul {
    border-left: none !important;
  }
  .menu-list li ul li {
    font-size: 1rem;
    border-left: 4px solid #dbdbdb;
    transition: border-left 0.5s, padding-left 0.5s;
    :hover {
      padding-left: 0.5rem;
      border-left: 5px solid ${theme.secondaryColor};
    }
  }
  .image.is-64x64 {
    margin: 0rem 1rem 0rem 0rem;
  }
  .pagination {
    margin-top: 3rem;
  }
`;

const NewsConetnt = () => (
  <Section className="section">
    <div className="container">
      <div className="columns">
        <div className="column">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        <div className="column is-4">
          <h1 className="title is-5">Search</h1>
          <div className="field has-addons">
            <div className="control is-expanded">
              <input className="input" type="text" placeholder="Search " />
            </div>
            <div className="control">
              <a className="button  is-rounded">
                <span className="icon search">
                  <i className="fas fa-search" />
                </span>
              </a>
            </div>
          </div>
          <div className="posts">
            <h1 className="title is-5">Recent Posts</h1>
            <NewsPosts />
            <NewsPosts />
            <NewsPosts />
          </div>
          <div className="posts">
            <HelpCard />
          </div>
          <div className="posts">
            <h1 className="title is-5">Recent Posts</h1>
            <aside className="menu">
              <ul className="menu-list">
                <li>
                  <ul>
                    <li>
                      <a>Recent</a>
                    </li>
                    <li>
                      <a> Business</a>
                    </li>
                    <li>
                      <a> PR</a>
                    </li>
                    <li>
                      <a> Projects</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </aside>
          </div>
          <div className="posts">
            <h1 className="title is-5">Our Photostream</h1>
            <figure className="image is-64x64 is-inline-block">
              <img src="/images/stream/first.jpg" />
            </figure>
            <figure className="image is-64x64 is-inline-block">
              <img src="/images/stream/second.jpg" />
            </figure>
            <figure className="image is-64x64 is-inline-block">
              <img src="/images/stream/three.jpg" />
            </figure>
            <figure className="image is-64x64 is-inline-block">
              <img src="/images/stream/four.jpg" />
            </figure>
            <figure className="image is-64x64 is-inline-block">
              <img src="/images/stream/five.jpg" />
            </figure>
            <figure className="image is-64x64 is-inline-block">
              <img src="/images/stream/seven.jpg" />
            </figure>
            <figure className="image is-64x64 is-inline-block">
              <img src="/images/stream/eight.jpg" />
            </figure>
            <figure className="image is-64x64 is-inline-block">
              <img src="/images/stream/nine.jpg" />
            </figure>
          </div>
        </div>
      </div>
      <nav className="pagination" role="navigation" aria-label="pagination">
        <a
          className="pagination-previous"
          title="This is the first page"
          disabled>
          Previous
        </a>
        <a className="pagination-next">Next page</a>
        <ul className="pagination-list">
          <li>
            <a
              className="pagination-link is-current"
              aria-label="Page 1"
              aria-current="page">
              1
            </a>
          </li>
          <li>
            <a className="pagination-link" aria-label="Goto page 2">
              2
            </a>
          </li>
          <li>
            <a className="pagination-link" aria-label="Goto page 3">
              3
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </Section>
);

export default NewsConetnt;
