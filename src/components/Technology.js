import React from 'react';
import TechnologyItem from './TechnologyItem';

const Technology = ({ items }) => (
  <section className="section">
    <div className="container">
      <div className="columns is-multiline">
        {items.map(data => (
          <TechnologyItem
            title={data.node.title}
            subtitle={data.node.subtitle.subtitle}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Technology;
