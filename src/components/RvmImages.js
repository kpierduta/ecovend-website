import React from 'react';

const RvmImages = ({ images }) => {
  return (
    <section className="section has-text-centered">
      <div className="container">
        <div className="columns">
          {images.map(item => (
            <div className="column">
              <img src={item.file.url} alt={item.file.url} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RvmImages;
