import React from 'react';

const TechnologyItem = ({ title }) => (
  <div className="box">
    <article className="media">
      <div className="media-content">
        <div className="content">
          <h1 className="title is-4">{title}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            efficitur sit amet massa fringilla egestas. Nullam condimentum
            luctus turpis.
          </p>
        </div>
      </div>
    </article>
  </div>
);

export default TechnologyItem;
