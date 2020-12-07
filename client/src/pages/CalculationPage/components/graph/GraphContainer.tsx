import { CalculationFormState } from '@state/calculationForm/types'
import { addDot, getDots } from '@state/dot/actions'
import { AppState } from '@state/types'
import { getClickPoint } from '@utils/services/graphicsService'
import isHit from '@utils/services/ValidationService'
import { useSnackbar } from 'notistack'
import React, {
    FC,
    MutableRefObject,
    useCallback,
    useEffect,
    useRef,
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import GraphView from './GraphView'
import Dot from './svgElements/Dot'

interface GraphContainerProps {}

const GraphContainer: FC = () => {
    const { r } = useSelector<AppState>(
        (state) => state.calculationForm,
    ) as CalculationFormState
    const { dots } = useSelector<AppState>((state) => state.dots) as DotState
    const svgRef = useRef<SVGSVGElement>(null)
    const dispatch = useDispatch()
    const snack = useSnackbar()

    /*useEffect(() => {
        dispatch(getDots())
    }, [])*/

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
        event.preventDefault()
        event.stopPropagation()
        const domPoint = getClickPoint(event, svg)

        const dot = Dot.fromSvg(domPoint.x, domPoint.y, r)
        dispatch(addDot(dot, snack))

        return false
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
