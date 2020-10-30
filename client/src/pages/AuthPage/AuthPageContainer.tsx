import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { AppState } from '../../state/types'
import AuthPageView from './AuthPageView'

const AuthPageContainer = () => {
    const mode = useSelector<AppState>((state) => state.theme.mode)
    return (
        <ThemeProvider theme={{ mode: mode }}>
            <AuthPageView />
        </ThemeProvider>
    )
}

export default AuthPageContainer
