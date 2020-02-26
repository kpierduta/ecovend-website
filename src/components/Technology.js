import React from 'react';
import TechnologyItem from './TechnologyItem';

const Technology = ({ items, technology }) => (
  <section className="section">
    <div className="container">
      <div
        className={
          technology.displayTechnologyCard
            ? 'columns is-multiline'
            : 'is-hidden'
        }
      >
        {items.map(data => (
          <TechnologyItem item={data.node} />
        ))}
      </div>
      <div
        className={technology.displayTechnologySection ? 'hero' : 'is-hidden'}
      >
        <div className="hero-body">
          <h1 className="title is-5 is-spaced">{technology.title}</h1>
          <h1 className="subtitle is-6">{technology.subtitle.subtitle}</h1>
        </div>
      </div>
    </div>
  </section>
);

export default Technology;
