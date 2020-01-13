import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Section = styled.div`
  margin-top: 2.75rem;
  .title.is-4 {
    margin-bottom: 0.5rem;
  }
`;

const FollowUs = () => (
  <Section>
    <h5 className="title is-4">Follow Us</h5>
    <Link to="/" className="icon is-size-4">
      <i className="fab fa-linkedin-in"></i>
    </Link>
    <Link to="/" className="icon is-size-5">
      <i className="fab fa-twitter"></i>
    </Link>
  </Section>
);

export default FollowUs;
