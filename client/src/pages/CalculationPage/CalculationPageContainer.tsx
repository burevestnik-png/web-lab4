import { AppState } from '@state/types'
import React, { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import CalculationPageView from './CalculationPageView'

const CalculationPageContainer: FunctionComponent = () => {
    const mode = useSelector<AppState>((state) => state.theme.mode)

    return (
        <ThemeProvider theme={{ mode: mode }}>
            <CalculationPageView />
        </ThemeProvider>
    )
}

export default CalculationPageContainer
