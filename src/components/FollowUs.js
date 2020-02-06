import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Section = styled.div`
  margin-top: 3rem;
  .title.is-5 {
    margin-top: 0.5rem;
  }
`;

const FollowUs = () => (
  <Section>
    <h5 className="title is-5">Follow Us</h5>
    <Link to="/" className="icon is-size-4">
      <i className="fab fa-linkedin-in"></i>
    </Link>
    <Link to="/" className="icon is-size-5">
      <i className="fab fa-twitter"></i>
    </Link>
  </Section>
);

export default FollowUs;
