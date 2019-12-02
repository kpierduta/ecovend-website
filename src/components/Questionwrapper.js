import React from 'react';
import styled from 'styled-components';

import FaqItem from '../components/FaqItem';

const CardWrapper = styled.div`
  margin: 2rem 0rem;
  :first-child {
    margin-top: 6rem;
  }
`;
class Question extends React.Component {
  render() {
    const { faq } = this.props;
    return (
      <React.Fragment>
        {faq.map(item => (
          <CardWrapper>
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
