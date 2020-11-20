import { changeTheme } from '@state/theme/actions'
import React, { FunctionComponent, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { AppState } from '@state/types'
import AuthPageView from './AuthPageView'

const AuthPageContainer: FunctionComponent = () => {
    const mode = useSelector<AppState>((state) => state.theme.mode)

    return (
        <ThemeProvider theme={{ mode: mode }}>
            <AuthPageView />
        </ThemeProvider>
    )
}

export default AuthPageContainer
