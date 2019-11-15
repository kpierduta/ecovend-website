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
      <div className="columns">
        <div className="column is-12">
          {faq.map(item => (
            <CardWrapper>
              <FaqItem
                questions={item.node.question.question}
                answer={item.node.answer.answer}
              />
            </CardWrapper>
          ))}
        </div>
      </div>
    );
  }
}

export default Question;
