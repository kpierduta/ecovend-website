import React from 'react';
import styled from 'styled-components';

import BreadCrumbs from './BreadCrumbs';
import BlogCard from './BlogCard';
import AsideMenu from './AsideMenu';

const Section = styled.div`
  margin-bottom: 4rem;

  .column:first-child {
    padding: 0;
  }

  .image.is-64x64 {
    margin: 0rem 1rem 0rem 0rem;
  }

  .columns.is-variable.is-8 {
    --columnGap: 4rem;
  }
`;

const NewsHero = ({ news, category, onCategoryChange }) => {
  return (
    <Section>
      <BreadCrumbs undelineText="News" />
      <section className="section">
        <div className="container">
          <div className="columns is-variable is-8">
            <div className="column is-7">
              {news.map(({ node }) => {
                if (node.category === category || category === 'all') {
                  return <BlogCard item={node} />;
                }
              })}
            </div>
            <div className="column">
              <AsideMenu onChange={onCategoryChange} />
            </div>
          </div>
        </div>
      </section>
    </Section>
  );
};

export default NewsHero;
