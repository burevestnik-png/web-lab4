import { CalculationFormState } from '@state/calculationForm/types'
import { addDot } from '@state/dot/actions'
import { AppState } from '@state/types'
import { getClickPoint } from '@utils/services/graphicsService'
import isHit from '@utils/services/ValidationService'
import { useSnackbar } from 'notistack'
import React, { FC, MutableRefObject, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import GraphView from './GraphView'
import Dot from './svgElements/Dot'

const GraphContainer: FC = () => {
    const { r } = useSelector<AppState>(
        (state) => state.calculationForm,
    ) as CalculationFormState
    const { dots } = useSelector<AppState>((state) => state.dots) as DotState
    const svgRef = useRef<SVGSVGElement>(null)
    const dispatch = useDispatch()
    const snack = useSnackbar()

    const convertRToPx = useCallback(
        (value: number) => {
            return value * 10
        },
        [r],
    )

    const handleSvgClick = (
        event: React.MouseEvent<SVGSVGElement>,
        svg: MutableRefObject<SVGSVGElement>,
    ) => {
        const domPoint = getClickPoint(event, svg)

        const dot = new Dot(domPoint.x, domPoint.y, r)
        dot.type = isHit(dot, r)
        dispatch(addDot(dot, snack))
    }

    return (
        <GraphView
            r={convertRToPx(r)}
            dots={dots}
            onSvgClick={handleSvgClick}
            svgRef={svgRef}
        />
    )
}

export default GraphContainer
