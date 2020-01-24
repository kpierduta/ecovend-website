import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Section = styled.section`
  .pagination-link.is-current {
    background-color: ${props => props.theme.primaryColor};
    border-color: ${props => props.theme.primaryColor};
  }
`;

const Pagination = ({ pageContext }) => (
  <Section className="section">
    <div className="container">
      <nav className="pagination" role="navigation" aria-label="pagination">
        <Link
          to={pageContext.previousPagePath}
          className="pagination-previous"
          title="This is the first page"
        >
          Previous
        </Link>
        <Link to={pageContext.nextPagePath} className="pagination-next">
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
            <Link to="/" className="pagination-link" aria-label="Goto page 2">
              2
            </Link>
          </li>
          <li>
            <Link to="/" className="pagination-link" aria-label="Goto page 3">
              3
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </Section>
);

export default Pagination;
