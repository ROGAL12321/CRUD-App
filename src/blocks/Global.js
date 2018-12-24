import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const Global = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700');
  
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