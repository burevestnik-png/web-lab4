import 'normalize.css'
import React, { FunctionComponent } from 'react'
import { createGlobalStyle } from 'styled-components'
import AuthPageContainer from './pages/AuthPage/AuthPageContainer'

const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Nunito:400,600,700");

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
    font-family: "Nunito", sans-serif;
  }
`

const App: FunctionComponent = () => (
    <>
        <GlobalStyles />
        <AuthPageContainer />
    </>
)

export default App
