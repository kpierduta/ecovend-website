import React from 'react';
import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Section = styled.section`
  h1,
  h2,
  h3,
  h4 {
    font-size: 24px;
    line-height: ${props => (props.lineHeight ? props.lineHeight : '34px')};
  }
  p {
    font-size: 17px;
    line-height: ${props => (props.lineHeight ? props.lineHeight : '34px')};
  }
`;

class Content extends React.Component {
  render() {
    const { data, lineHeight } = this.props;

    const document = data;
    return (
      <Section lineHeight={lineHeight}>
        <div>{documentToReactComponents(document)}</div>
      </Section>
    );
  }
}

export default Content;
