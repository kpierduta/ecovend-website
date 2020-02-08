import React from 'react';
import styled from 'styled-components';

import ChooseCard from './ChooseCard';

const Section = styled.section`
  background-color: #f9f9f9;
`;

class Choose extends React.Component {
  render() {
    const { home } = this.props;
    return (
      <Section className="section">
        <div className="container has-text-centered">
          <h1 className="title is-5">{home.chooseTitle}</h1>
          <h1 className="subtitle is-5 has-text-weight-normal">
            {home.chooseSubtitle}
          </h1>
          <div className="columns is-multiline">
            {home.chooseIcons.map(items => (
              <ChooseCard data={items} />
            ))}
          </div>
        </div>
      </Section>
    );
  }
}

export default Choose;
