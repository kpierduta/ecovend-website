import React from 'react';
import styled from 'styled-components';

const HeadingStyled = styled.div`
  margin-top: 2rem;
  .tabs {
    padding-left: 1rem;
  }
  .tabs ul {
    padding-bottom: 2.3rem;
    border-bottom: 1.25px solid ${props => props.theme.primaryColor};
  }
  .tabs a {
    border-bottom: transparent;
    color: ${props => props.theme.primaryColor};
  }
`;

export default class Heading extends React.Component {
  render() {
    const { heading } = this.props;
    return (
      <HeadingStyled>
        <div className="container">
          <div className="tabs is-size-6">
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
