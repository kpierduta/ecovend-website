import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const Conatiner = styled.section`
  font-family: ${theme.primaryFontFamily};
  font-size: 15px;
  background-color: #e1eff2;
  padding-bottom: 0.75rem;
  .column {
    padding: 0 !important;
  }
  .columns {
    margin-left: 0rem !important;
    margin-right: 0rem !important;
  }
  .section {
    padding: 10rem 5rem 3rem 5.5rem;
    @media only screen and (max-width: 600px) {
      padding: 3rem 1.5rem;
    }
  }
  .Heading {
    font-size: ${theme.fontSizeMedium};
    margin-bottom: 4rem;
    font-weight: 500;
    color: ${theme.secondaryColor};
  }
  .text {
    margin-top: 2rem;
    color: ${theme.secondaryColor};
    font-weight: 200;
    line-height: 1.5;
  }
  .content {
    margin-top: 2rem;
    color: ${theme.secondaryColor};
    font-weight: 200;
    padding-bottom: 10rem;
  }
  .content li {
    margin-top: 2rem;
  }
  .column :last-child {
    background-image: url(${props => props.image});
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
`;

class Customer extends React.Component {
  render() {
    const { home } = this.props;
    return (
      <Conatiner image={home.prImage.file.url}>
        <div className="columns">
          <div className="column">
            <section className="section">
              <div className="container">
                <h1 className="Heading">{home.differenceTitle}</h1>
                <p className="text">{home.differencePara}</p>
                <div className="content">
                  <ul type="*">
                    <li>{home.firstPoint}</li>
                    <li>{home.secondPoint}</li>
                    <li>{home.thirdPoint}</li>
                    <li>{home.fourthPoint}</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          <div className="column" />
        </div>
      </Conatiner>
    );
  }
}

export default Customer;
