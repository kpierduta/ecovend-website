import React from 'react';

const ContactHero = ({ data }) => {
  return (
    <section className="section">
      <div className="container">
        <h5 className="title is-5 is-spaced">{data.mainTitle}</h5>
        <h5 className="subtitle is-6">{data.description.description}</h5>
        <div className="columns">
          {data.images.map(items => (
            <div className="column is-half">
              <img src={items.file.url} alt={items.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
