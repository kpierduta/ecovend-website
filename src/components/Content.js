import React from 'react';
import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Section = styled.section`
  h1,
  h2,
  h3,
  h4 {
    font-size: 24px;
    line-height: 34px;
  }
  p {
    font-size: 17px;
    line-height: 34px;
  }
`;

class Content extends React.Component {
  render() {
    const { data } = this.props;

    const document = data;
    return (
      <Section>
        <div>{documentToReactComponents(document)}</div>
      </Section>
    );
  }
}

export default Content;
