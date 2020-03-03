import React from 'react';
import styled from 'styled-components';

import CaseCardConatiner from './CaseCardConatiner';

const Conatiner = styled.div`
  background-color: #f1f1f1;
  margin-top: 2rem;
  font-family: ${props => props.theme.secondaryFontFamily};
  .title,
  .subtitle {
    color: white !important;
  }
`;

const CaseCard = ({ data }) => {
  return (
    <Conatiner className="section">
      <div className="container">
        <div className="columns has-text-centered is-variable is-4">
          {data.map(items => (
            <CaseCardConatiner
              color={items.color}
              title={items.title}
              subtitle={items.subtitle}
            />
          ))}
        </div>
      </div>
    </Conatiner>
  );
};

export default CaseCard;
