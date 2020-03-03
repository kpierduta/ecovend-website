import React from 'react';
import styled from 'styled-components';

import StatsCard from './StatsCard';

const container = styled.div`
  background-color: #f1f1f1;
  margin-top: 2rem;
  font-family: ${props => props.theme.secondaryFontFamily};
  .title,
  .subtitle {
    color: white !important;
  }
`;

const CaseStats = ({ data }) => {
  return (
    <container className="section">
      <div className="container">
        <div className="columns is-multiline has-text-centered is-variable is-4">
          {data.map(items => (
            <div className="column is-3">
              <StatsCard
                color={items.color}
                title={items.title}
                subtitle={items.subtitle}
              />
            </div>
          ))}
        </div>
      </div>
    </container>
  );
};

export default CaseStats;
