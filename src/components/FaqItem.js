import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: ${props => props.theme.primaryFontFamily};
  font-size: ${props => props.theme.fontSizeMedium} !important;
  .Icon {
    color: ${props => props.theme.primaryColor};
    font-size: 27px;
    margin: 0rem 2rem;
    @media only screen and (max-width: 600px) {
      margin: 0rem 7rem;
    }
  }
  .column:first-child {
    padding: 0.5rem 0rem 0rem;
  }
`;

const TitleWrapper = styled.div`
  h1 {
    font-size: ${props => props.theme.fontSizeMedium};
    color: ${props => props.theme.primaryColor};
  }
`;

const AnswerContainer = styled.div`
  padding: 1rem 0rem;
`;

class FaqItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { show: false };
    this.toggleDiv = this.toggleDiv.bind(this);
  }

  toggleDiv = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };

  render() {
    const { questions, answer } = this.props;
    const { show } = this.state;

    return (
      <Container className="container">
        <div className="columns">
          <div className="column is-10">
            <TitleWrapper>
              <h1 className="subtitle is-6">{questions}</h1>
            </TitleWrapper>
          </div>
          <div className="column">
            <a onClick={this.toggleDiv}>
              <i className="Icon fas fa-chevron-circle-down is-pulled-right" />
            </a>
          </div>
        </div>
        {show && (
          <AnswerContainer>
            <p className="subtitle is-6">{answer}</p>
          </AnswerContainer>
        )}
      </Container>
    );
  }
}

export default FaqItem;
