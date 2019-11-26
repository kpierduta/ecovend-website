import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';

const brandColor = '#f38044';
const darkShade = '#F26F1E';
const lightShade = '#b5b5b5';
const secondaryBackground = '#e0e0e0';

export const theme = {
  brandColor,
  darkShade,
  lightShade,
  secondaryBackground,
  primaryFontFamily: "'Raleway', sans-serif",
  secondaryFontFamily: "'font36452', sans-serif",
  primaryColor: brandColor,
  secondaryColor: darkShade,
  hovercolor: lightShade,
  background: secondaryBackground,
  fontSize: '0.875rem',
  fontSizeMedium: '1.0625rem',
  fontSizeLarge: '1.25rem',
  boxShadow: 'rgba(0,0,0,0.08) 0px 7px 18px',
};

const GlobalStyle = createGlobalStyle`
  ${reset};
  
  body {
    font-family: ${theme.primaryFontFamily};
  }

  .title{
    font-weight: 600;
    letter-spacing: 1.1px;
    line-height:2;
  }

  .subtitle.is-5{
    font-size: 17px !important;
    font-weight: 600;
    letter-spacing:1.1px;
    line-height: 2;
  }

  .subtitle.is-6{
    font-size: 17px !important;
    font-weight: 400 !important;
    letter-spacing: 1.1px;
    line-height:2;
  }

  .columns {
    margin-left: 0rem !important;
    margin-right: 0rem !important;
  }
`;

export default GlobalStyle;
