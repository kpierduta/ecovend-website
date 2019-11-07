import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const Conatiner = styled.div`
  font-family: ${theme.secondaryFontFamily};
  color: ${theme.primaryColor};
  padding-bottom: 10rem;

  .columns {
    margin-left: 0rem !important;
    margin-right: 0rem !important;
  }
  .text {
    color: ${theme.primaryColor};
    margin-top: 10rem;
    font-weight: 500;
    font-size: ${theme.fontSizeMedium};
    @media only screen and (max-width: 768px) {
      margin-top: 5rem;
    }
  }
  .sub-text {
    line-height: 1.75rem;
    font-size: ${theme.fontSize};
  }
  .first {
    margin-top: 3.95rem;
  }
  .second {
    margin-top: 2rem;
  }
  video {
    width: 61.3125rem;
    height: 34.875rem;
    @media only screen and (max-width: 768px) {
      height: auto;
    }
  }
`;

class DrsInfo extends React.Component {
  render() {
    const { home } = this.props;
    return (
      <Conatiner id="drs" className="container">
        <div className="columns  is-centered is-multiline has-text-centered">
          <div className="column is-two-thirds">
            <h4 className="subtitle is-4 is-capitalized text">
              {home.orangeTitle}
            </h4>
            <p className="sub-text first">
              {home.orangeParagraph.internal.content}
            </p>
            <p className="sub-text second">
              {' '}
              {home.orangeSecondPara.internal.content}
            </p>
          </div>
        </div>
        <div className="has-text-centered">
          <video width="560" height="415" controls>
            <source
              src="/videos/ACM_Reverse_Vending_on_the_BBC.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </Conatiner>
    );
  }
}

export default DrsInfo;
