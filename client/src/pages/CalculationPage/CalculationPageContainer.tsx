import { getDots } from '@state/dot/actions'
import { AppState } from '@state/types'
import React, { FunctionComponent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import CalculationPageView from './CalculationPageView'

const CalculationPageContainer: FunctionComponent = () => {
    const mode = useSelector<AppState>((state) => state.theme.mode)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDots())
    }, [])

    return (
        <ThemeProvider theme={{ mode: mode }}>
            <CalculationPageView />
        </ThemeProvider>
    )
}

export default CalculationPageContainer
