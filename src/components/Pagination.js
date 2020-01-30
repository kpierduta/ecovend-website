import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Section = styled.section`
  .pagination-link.is-current {
    background-color: ${props => props.theme.primaryColor};
    border-color: ${props => props.theme.primaryColor};
  }
`;

const Pagination = ({ pageContext }) => {
  const pages = [];

  for (let i = 1; i <= pageContext.numberOfPages; i++) {
    pages.push(i);
  }

  return (
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
            {pages.map(items => (
              <li>
                <Link
                  to={`/news/${items == 1 ? '' : items}`}
                  className={
                    pageContext.humanPageNumber == items
                      ? 'pagination-link is-current'
                      : 'pagination-link'
                  }
                  aria-label="Page 1"
                  aria-current="page"
                >
                  {items}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Section>
  );
};

export default Pagination;
