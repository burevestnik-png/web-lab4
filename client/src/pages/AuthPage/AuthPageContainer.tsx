import React from 'react'
import { ThemeProvider } from 'styled-components'
import AuthPageView from './AuthPageView'

const AuthPageContainer = () => {
    return (
        <ThemeProvider theme={{ mode: 'dark' }}>
            <AuthPageView />
        </ThemeProvider>
    )
}

export default AuthPageContainer
