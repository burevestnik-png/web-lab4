import { ADD_DOT, DOT_FAIL, DOT_SUCCESS } from '@state/dot/actionTypes'
import Dot from '../../pages/CalculationPage/components/graph/svgElements/Dot'

export {}

declare global {
    interface DotState {
        dots: Dot[]
    }

    interface AddDotAction {
        type: typeof ADD_DOT
        dot: Dot
    }

    interface DotsSuccess {
        type: typeof DOT_SUCCESS
    }

    interface DotsFail {
        type: typeof DOT_FAIL
        message: string
    }

    type SvgStateActions = AddDotAction
}
