import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import theme from '../utils/theme';
import BreadCrumbs from './BreadCrumbs';
import BlogCard from './BlogCard';
import NewsPosts from './NewsPosts';
import HelpCard from './HelpCard';

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
  .test{
    margin-bottom:5rem;
  }
`;

class NewsConetnt extends React.Component {
  render() {
    const { news } = this.props;
    return (
      <Section className="section">
        <div className="container">
          <div className="test">
            <BreadCrumbs undelineText="News" />
          </div>
          <div className="columns">
            <div className="column">
              {news.map(item => (
                <BlogCard
                  category={item.node.newsCategory}
                  date={item.node.date}
                  image={item.node.image.file.url}
                  title={item.node.newsTitle}
                  para={item.node.shortDescription.internal.content}
                  to={`/blog/${item.node.slug}`}
                />
              ))}
            </div>
            <div className="column is-4">
              <h1 className="title is-5">Search</h1>
              <div className="field has-addons">
                <div className="control is-expanded">
                  <input className="input" type="text" placeholder="Search " />
                </div>
                <div className="control">
                  <button className="button is-rounded" type="button">
                    <span className="icon">
                      <i className="fas fa-search" />
                    </span>
                  </button>
                </div>
              </div>
              <div className="posts">
                <h1 className="title is-5">Recent Posts</h1>
                <NewsPosts image="/images/news/four.jpg" />
                <NewsPosts image="/images/news/three.jpg" />
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
                          <Link to="/">Recent</Link>
                        </li>
                        <li>
                          <Link to="/"> Business</Link>
                        </li>
                        <li>
                          <Link to="/"> PR</Link>
                        </li>
                        <li>
                          <Link to="/"> Projects</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </aside>
              </div>
              <div className="posts">
                <h1 className="title is-5">Our Photostream</h1>
                <figure className="image is-64x64 is-inline-block">
                  <img src="/images/stream/first.jpg" alt="" />
                </figure>
                <figure className="image is-64x64 is-inline-block">
                  <img src="/images/stream/second.jpg" alt="" />
                </figure>
                <figure className="image is-64x64 is-inline-block">
                  <img src="/images/stream/three.jpg" alt="" />
                </figure>
                <figure className="image is-64x64 is-inline-block">
                  <img src="/images/stream/four.jpg" alt="" />
                </figure>
                <figure className="image is-64x64 is-inline-block">
                  <img src="/images/stream/five.jpg" alt="" />
                </figure>
                <figure className="image is-64x64 is-inline-block">
                  <img src="/images/stream/seven.jpg" alt="" />
                </figure>
                <figure className="image is-64x64 is-inline-block">
                  <img src="/images/stream/eight.jpg" alt="" />
                </figure>
                <figure className="image is-64x64 is-inline-block">
                  <img src="/images/stream/nine.jpg" alt="" />
                </figure>
              </div>
            </div>
          </div>
          <nav className="pagination" role="navigation" aria-label="pagination">
            <Link
              to="/"
              className="pagination-previous"
              title="This is the first page"
              disabled
            >
              Previous
            </Link>
            <Link to="/" className="pagination-next">
              Next page
            </Link>
            <ul className="pagination-list">
              <li>
                <Link
                  to="/"
                  className="pagination-link is-current"
                  aria-label="Page 1"
                  aria-current="page"
                >
                  1
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="pagination-link"
                  aria-label="Goto page 2"
                >
                  2
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="pagination-link"
                  aria-label="Goto page 3"
                >
                  3
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Section>
    );
  }
}
export default NewsConetnt;
