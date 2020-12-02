import { ADD_DOT } from '@state/svg/actionTypes'
import Dot from '../../pages/CalculationPage/components/graph/svgElements/Dot'

export {}

declare global {
    interface SvgState {
        dots: Dot[]
    }

    interface AddDotAction {
        type: typeof ADD_DOT
        dot: Dot
    }

    type SvgStateActions = AddDotAction
}
