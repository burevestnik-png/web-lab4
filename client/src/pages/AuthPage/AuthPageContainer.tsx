import { changeTheme } from '@state/theme/actions'
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { AppState } from '@state/types'
import AuthPageView from './AuthPageView'

const AuthPageContainer = () => {
    const mode = useSelector<AppState>((state) => state.theme.mode)
    const dispatch = useDispatch()

    const themeChangeAction = useCallback(() => {
        dispatch(changeTheme())
    }, [])

    return (
        <ThemeProvider theme={{ mode: mode }}>
            <AuthPageView themeChangeAction={themeChangeAction} />
        </ThemeProvider>
    )
}

export default AuthPageContainer
