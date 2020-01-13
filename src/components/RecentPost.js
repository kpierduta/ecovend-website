import React from 'react';
import styled from 'styled-components';
import NewsPosts from './NewsPosts';

const Container = styled.div`
  margin-top: 2rem;
`;

const RecentPost = () => (
  <Container>
    <h5 className="title is-4">Recent Posts</h5>
    <NewsPosts image="/images/news/four.jpg" />
    <NewsPosts image="/images/news/three.jpg" />
  </Container>
);

export default RecentPost;
