import { CalculationFormState } from '@state/calculationForm/types'
import { AppState } from '@state/types'
import React, { FC, useCallback } from 'react'
import { useSelector } from 'react-redux'
import GraphView from './GraphView'

const GraphContainer: FC = () => {
    const { r, x, y } = useSelector<AppState>(
        (state) => state.calculationForm,
    ) as CalculationFormState

    const convertRToPx = useCallback(
        (value: number) => {
            return value * 10
        },
        [r],
    )

    return <GraphView r={convertRToPx(r)} x={x} y={y} />
}

export default GraphContainer
