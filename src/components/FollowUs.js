import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

export const iconQuery = graphql`
  query social {
    contentfulHomePage {
      socialIcons
      linkedInLink
      twitterLink
    }
  }
`;

const Section = styled.div`
  margin-top: 3rem;
  .title.is-5 {
    margin-top: 0.5rem;
  }
`;

const FollowUs = () => (
  <StaticQuery
    query={iconQuery}
    render={data => {
      const { contentfulHomePage: icon } = data;
      return (
        <Section className={icon.socialIcons ? 'is-display' : 'is-hidden'}>
          <h5 className="title is-5">Follow Us</h5>
          <a href={icon.linkedInLink} className="icon is-size-4">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href={icon.twitterLink} className="icon is-size-5">
            <i className="fab fa-twitter"></i>
          </a>
        </Section>
      );
    }}
  />
);

export default FollowUs;
