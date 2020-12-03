import { ADD_DOT, DOT_FAIL, DOT_SUCCESS } from '@state/dot/actionTypes'
import Dot from '../../pages/CalculationPage/components/graph/svgElements/Dot'

export const addDot = (dot: Dot): AddDotAction => {
    return {
        type: ADD_DOT,
        dot,
    }
}

export const dotsSuccess = (): DotsSuccess => {
    return {
        type: DOT_SUCCESS,
    }
}

export const dotsFail = (message: string | any): DotsFail => {
    return {
        type: DOT_FAIL,
        message,
    }
}
