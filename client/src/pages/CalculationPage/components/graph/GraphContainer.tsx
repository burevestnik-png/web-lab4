import { CalculationFormState } from '@state/calculationForm/types'
import { AppState } from '@state/types'
import React, { FC, useCallback } from 'react'
import { useSelector } from 'react-redux'
import GraphView from './GraphView'
import { DotProps } from './svgElements/Dot'

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

    const dots: FC<DotProps>[] = []

    return <GraphView r={convertRToPx(r)} dots={dots} />
}

export default GraphContainer
