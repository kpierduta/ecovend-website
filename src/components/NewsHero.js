import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import BreadCrumbs from './BreadCrumbs';
import BlogCard from './BlogCard';
import Followus from './FollowUs';
import RecentPost from './RecentPost';
import HelpCard from './HelpCard';

const Section = styled.section`
  margin-bottom: 4rem;

  .column:first-child {
    padding: 0;
  }

  .image.is-64x64 {
    margin: 0rem 1rem 0rem 0rem;
  }

  .menu-list li ul {
    padding: 0rem;
    border-left: none !important;
  }

  .menu-list li {
    font-size: 1rem;
    border-left: 4px solid #dbdbdb;
    transition: border-left 0.5s, padding-left 0.5s;
    :hover {
      padding-left: 0.5rem;
      border-left: 5px solid ${props => props.theme.secondaryColor};
    }
  }

  .text {
    margin-top: 1.5rem;
  }

  .pagination {
    margin-top: 3rem;
  }

  .icon {
    color: ${props => props.theme.primaryColor};
    margin-right: 1rem;
  }
  .columns.is-variable.is-8 {
    --columnGap: 4rem;
  }
  .pagination-link.is-current {
    background-color: ${props => props.theme.primaryColor};
    border-color: ${props => props.theme.primaryColor};
  }
`;

class NewsConetnt extends React.Component {
  render() {
    const { news, pageContext } = this.props;
    console.log(pageContext);
    return (
      <React.Fragment>
        <BreadCrumbs undelineText="News" />
        <Section className="section">
          <div className="container">
            <div className="columns is-variable is-8">
              <div className="column is-7">
                {news.map(item => (
                  <BlogCard item={item.node} />
                ))}
              </div>
              <div className="column">
                <Followus />
                <div className="post-list">
                  <h5 className="title is-4 text">Categories</h5>
                  <aside className="menu">
                    <ul className="menu-list">
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
                  </aside>
                </div>
                <RecentPost />
                <div className="posts">
                  <HelpCard />
                </div>
              </div>
            </div>
          </div>
        </Section>
      </React.Fragment>
    );
  }
}
export default NewsConetnt;
