import 'normalize.css'
import React, { FunctionComponent } from 'react'
import { createGlobalStyle } from 'styled-components'
import AuthPageContainer from './pages/AuthPage'

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
    min-height: 200vh;
    font-family: "Roboto", sans-serif;
  }
`

const App: FunctionComponent = () => (
    <>
        <GlobalStyles />
        <AuthPageContainer />
    </>
)

export default App
