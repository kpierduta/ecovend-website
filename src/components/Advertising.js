import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Section = styled.section`
  background-color: ${props => props.theme.secondaryColor};

  .title {
    margin-bottom: 0rem;
  }
`;

class AdvertismentHero extends React.Component {
  render() {
    const { home } = this.props;
    return (
      <Section className="section has-text-centered">
        <div className="container">
          <h1 className="title is-5 has-text-white has-text-weight-medium">
            {home.marketingTitle}
          </h1>
          <div className="hero">
            <div className="hero-body">
              <h5 className="subtitle is-6 has-text-white ">
                {home.marketingPara.marketingPara}
              </h5>
            </div>
          </div>
          <Link to="/advertising" className="button is-link">
            Find out more
          </Link>
        </div>
      </Section>
    );
  }
}

export default AdvertismentHero;
