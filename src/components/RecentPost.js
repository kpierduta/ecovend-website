import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import styled from 'styled-components';
import NewsPosts from './NewsPosts';

const Container = styled.div`
  margin-top: 2rem;
`;

const recent = graphql`
  query recentpost {
    allContentfulNewsPage(
      limit: 2
      sort: { fields: dateOfPublish, order: DESC }
    ) {
      edges {
        node {
          slug
          image {
            title
            file {
              url
            }
          }
          newsTitle
          excerpt
        }
      }
    }
  }
`;

const RecentPost = () => {
  return (
    <StaticQuery
      query={recent}
      render={data => {
        const value = data.allContentfulNewsPage.edges;
        return (
          <Container>
            <h5 className="title is-4">Recent Posts</h5>
            {value.map(items => (
              <NewsPosts data={items.node} />
            ))}
          </Container>
        );
      }}
    />
  );
};

export default RecentPost;
