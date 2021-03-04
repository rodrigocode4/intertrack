import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* https://meyerweb.com/eric/tools/css/reset/
  v2.0 | 20110126
  License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  body {
    --bg-primary: #EFECE4;
    --bg-secondary: #D6B08A;
    --bg-plate-primary: #D5D5D5;
    --bg-plate-secondary: #9E9E9E;
    --text-plate-secondary: rgba(32, 50, 93, 0.23);
    --text-plate: #20325D;
    --text-primary: #EFECE4;
    --text-primary-placeholder:  rgba(239, 236, 228, 0.5);
    --text-secondary: #6C6965;
    --text-tertiary: #ae9e9e;
    line-height: 1;
    display: block;
    background-color: var(--bg-primary);
    overflow: hidden;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  `

export default GlobalStyle
