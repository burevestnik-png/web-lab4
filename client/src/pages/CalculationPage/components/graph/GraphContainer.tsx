import { CalculationFormState } from '@state/calculationForm/types'
import { addDot } from '@state/svg/actions'
import { AppState } from '@state/types'
import { getClickPoint } from '@utils/services/graphicsService'
import React, { FC, MutableRefObject, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import GraphView from './GraphView'
import Dot, { DotProps } from './svgElements/Dot'

const GraphContainer: FC = () => {
    const { r, x, y } = useSelector<AppState>(
        (state) => state.calculationForm,
    ) as CalculationFormState
    const { dots } = useSelector<AppState>((state) => state.svg) as SvgState
    const svgRef = useRef<SVGSVGElement>(null)
    const dispatch = useDispatch()

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
        dispatch(
            addDot(
                <Dot
                    type={'SUCCESS'}
                    x={domPoint.x}
                    y={domPoint.y}
                    key={domPoint.y + domPoint.x}
                />,
            ),
        )
        console.log(r)
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
