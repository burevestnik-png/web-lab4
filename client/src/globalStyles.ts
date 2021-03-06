import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle` 
  :root {
    box-sizing: border-box;
  }
  
  *
  ::before,
  ::after {
    box-sizing: inherit;
  }
  
  body {
    min-height: 100vh;
    font-family: "Roboto", sans-serif;
    position: absolute;
    min-width: 100%;
  }
`

export default GlobalStyles
