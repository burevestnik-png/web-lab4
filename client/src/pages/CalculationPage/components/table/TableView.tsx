import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@material-ui/core'
import { primaryColor, secondaryColor } from '@theme/colorTheme'
import { TABLET, transition } from '@theme/constants'
import React, { FC } from 'react'
import styled from 'styled-components'
import Dot from '../graph/svgElements/Dot'

interface TableViewProps {
    readonly dots: Dot[]
}

const StyledTable = styled(TableContainer)`
    background-color: ${secondaryColor} !important;
    transition: all ${transition}s ease-in-out;

    table {
        width: 70%;
        margin: auto;
    }

    th,
    td {
        color: ${primaryColor};
    }

    @media (max-width: ${TABLET}px) {
        table {
            width: 90%;
        }
    }
`

const TableView: FC<TableViewProps> = ({ dots }) => {
    return (
        <StyledTable>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">X</TableCell>
                        <TableCell align="center">Y</TableCell>
                        <TableCell align="center">R</TableCell>
                        <TableCell align="center">
                            Время выполнения, мс
                        </TableCell>
                        <TableCell align="center">Попадание</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dots.map((dot) => (
                        <TableRow key={dot.id}>
                            <TableCell align="center">
                                {dot.getNormalizedY(dot.initialR).toFixed(2)}
                            </TableCell>
                            <TableCell align="center">
                                {dot.getNormalizedY(dot.initialR).toFixed(2)}
                            </TableCell>
                            <TableCell align="center">{dot.initialR}</TableCell>
                            <TableCell align="center">
                                {dot.executionTime}
                            </TableCell>
                            <TableCell align="center">
                                {dot.type ? (
                                    <span style={{ color: 'green' }}>Есть</span>
                                ) : (
                                    <span style={{ color: 'red' }}>Мимо</span>
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </StyledTable>
    )
}

export default TableView
