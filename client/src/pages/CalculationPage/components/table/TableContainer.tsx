import { AppState } from '@state/types'
import React from 'react'
import { useSelector } from 'react-redux'
import TableView from './TableView'

const TableContainer = () => {
    const { dots } = useSelector<AppState>((state) => state.dots) as DotState

    return <TableView dots={dots} />
}

export default TableContainer
