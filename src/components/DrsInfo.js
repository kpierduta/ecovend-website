import React from 'react';
import styled from 'styled-components';

const Conatiner = styled.div`
  padding-bottom: 10rem;

  .title.is-4 {
    margin-top: 7rem;
    @media only screen and (max-width: 768px) {
      margin-top: 5rem;
    }
  }

  .first {
    margin-top: 3.95rem !important;
  }

  .second {
    margin-top: 2rem !important;
  }

  video {
    margin-top: 5rem !important;
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
      <Conatiner className="container">
        <div className="columns  has-text-centered">
          <div className="column">
            <h4 className="title is-4 is-capitalized has-text-primary">
              {home.orangeTitle}
            </h4>
            <h6 className="subtitle is-6 has-text-primary first">
              {home.orangeParagraph.internal.content}
            </h6>
            <h6 className="subtitle is-6 has-text-primary second">
              {' '}
              {home.orangeSecondPara.internal.content}
            </h6>
            <h6 className="subtitle is-6 has-text-primary second">
              {' '}
              {home.orangeThirdPara.internal.content}
            </h6>
          </div>
          <div className="column">
            <video width="560" height="415" controls>
              <source
                src="/videos/ACM_Reverse_Vending_on_the_BBC.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </Conatiner>
    );
  }
}

export default DrsInfo;
