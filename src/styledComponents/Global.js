import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const Global = createGlobalStyle`
  ${reset}

  body {
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #EEE;
    letter-spacing: 0.1px;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
  }
`

export default Global;
