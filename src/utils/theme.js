import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';

const brandColor = '#f38044';
const darkShade = '#F26F1E';
const lightShade = '#b5b5b5';
const secondaryBackground = '#e0e0e0';
const lightBackground = '#eff2f3';

export const theme = {
  brandColor,
  darkShade,
  lightShade,
  secondaryBackground,
  lightBackground,
  primaryFontFamily: "'Abadi'",
  secondaryFontFamily: "'Abadi'",
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

  @font-face {
    font-family: Abadi;
    src: url("../fonts/abadimtstd-opentype.otf") format("opentype");
}

@font-face {
  font-family: Abadi;
  src: url("../fonts/abadimtstd-bold-opentype.otf") format("opentype");
}

@font-face {
  font-family: Abadi;
  src: url("../fonts/abadimtstd-extralight-opentype.otf") format("opentype");
}

  body {
    font-family: ${theme.primaryFontFamily};
  }

  .title{
    font-weight: 500 !important;
    letter-spacing: 1.1px;
    line-height:2;
  }

  .subtitle.is-5{
    font-size: 17px !important;
    font-weight: 500 !important;
    letter-spacing:1.1px;
    line-height: 2;
  }

  .subtitle.is-6{
    font-size: 17px !important;
    font-weight: 400 !important;
    letter-spacing: 1.1px;
    line-height:2;
  }

  .has-text-primary	{
    color:${theme.primaryColor} !important;
  }

  .has-text-danger{
    color:${theme.secondaryColor} !important;
  }

  .has-text-weight-medium {
    font-weight: 500 !important;
  }

.button.is-primary{
  font-weight: 400 !important;
  background-color: ${props => props.theme.secondaryColor} !important;
  color: #fff !important;
  transition: opacity 0.2s !important;
  :hover {
    background-color: ${props => props.theme.secondaryColor} !important;
    color: #fff !important;
    opacity: 0.6 !important;
  }
}

.button.is-link{
  font-weight: 400 !important;
  background-color: #fff  !important;
  color:  ${props => props.theme.secondaryColor} !important;
  transition: opacity 0.2s !important;
  :hover {
    color: ${props => props.theme.secondaryColor} !important;
    background-color: #fff !important;
    opacity: 0.6 !important;
  }
}

  .columns {
    margin-left: 0rem !important;
    margin-right: 0rem !important;
  }
`;

export default GlobalStyle;
