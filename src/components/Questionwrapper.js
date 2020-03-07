import React from 'react';
import styled from 'styled-components';

import FaqItem from './FaqItem';

const CardWrapper = styled.section`
  padding: 1.5rem 0.5rem;
  :first-child {
    margin-top: 6rem;
  }
  :last-child {
    padding-bottom: 5rem;
  }
`;
class Question extends React.Component {
  render() {
    const { faq } = this.props;
    return (
      <React.Fragment>
        {faq.map(item => (
          <CardWrapper className="section">
            <FaqItem
              questions={item.node.question.question}
              answer={item.node.answer.answer}
            />
          </CardWrapper>
        ))}
      </React.Fragment>
    );
  }
}

export default Question;
