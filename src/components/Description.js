import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const Container = styled.section`
  font-family: ${theme.primaryFontFamily};
  font-size: ${theme.fontSize};
`;

const Description = props => <Container>{props.value}</Container>;

export default Description;
