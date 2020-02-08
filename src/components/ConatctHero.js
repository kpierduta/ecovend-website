import React from 'react';

const ContactHero = () => (
  <section className="section">
    <div className="container">
      <h5 className="title is-5 is-spaced">
        Commitment to global sustainability
      </h5>
      <h5 className="subtitle is-6">
        Our goal is to achieve ‘zero waste’ across all our business activities
        by 2023. Already our corporate offices are ‘zero waste’ and our
        facility, Eco House is powered by a 40kw roof mounted solar panel array.
        The solar power generated meets most of our needs which includes the
        on-site charge points for our plug-in EV fleet. Any power not used by
        Ecovend feeds into the National Grid. Ecovend is not just a provider of
        environmental technology - we practice what we preach, and this reflects
        our holistic commitment to the environment
      </h5>
      <div className="columns">
        <div className="column">
          <img src="/images/office.png" alt="#" />
        </div>
        <div className="column">
          {' '}
          <img src="/images/building.png" alt="#" />
        </div>
      </div>
    </div>
  </section>
);

export default ContactHero;
