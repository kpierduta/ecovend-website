import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const HeadingStyled = styled.div`
  margin-top: 2rem;
  .tabs {
    padding-left: 1rem;
  }
  .tabs ul {
    padding-bottom: 2.3rem;
    border-bottom: 1.25px solid ${theme.primaryColor};
  }
  .tabs a {
    border-bottom: transparent;
    font-size: ${theme.fontSize};
    color: ${theme.primaryColor};
  }
`;

export default class Heading extends React.Component {
  render() {
    const { heading } = this.props;
    return (
      <HeadingStyled>
        <div className="container">
          <div className="tabs">
            <ul>
              <li>
                <a href="mailto:">{heading.email}</a>
              </li>
              <li>
                <a href="tel:">{heading.mobileNumber}</a>
              </li>
            </ul>
          </div>
        </div>
      </HeadingStyled>
    );
  }
}
