import { CircularProgress } from '@material-ui/core'
import { AppState } from '@state/types'
import { primaryColor } from '@theme/colorTheme'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import TableView from './TableView'

const ProgressBar = styled(CircularProgress)`
    margin: auto;
    color: ${primaryColor};
`

const TableContainer = () => {
    const { dots, loading } = useSelector<AppState>(
        (state) => state.dots,
    ) as DotState

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ProgressBar />
            </div>
        )
    }

    return <TableView dots={dots} />
}

export default TableContainer
