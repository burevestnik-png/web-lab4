import {
    ADD_DOT,
    CLEAN_DOTS_HISTORY,
    DOT_FAIL,
    DOT_SUCCESS,
} from '@state/dot/actionTypes'
import { ProviderContext } from 'notistack'
import Dot from '../../pages/CalculationPage/components/graph/svgElements/Dot'

export const addDot = (dot: Dot, snack: ProviderContext): AddDotAction => {
    return {
        type: ADD_DOT,
        dot,
        snack,
    }
}

export const dotsSuccess = (dot: Dot): DotsSuccess => {
    return {
        type: DOT_SUCCESS,
        dot,
    }
}

export const dotsFail = (message: string | any): DotsFail => {
    return {
        type: DOT_FAIL,
        message,
    }
}

export const cleanDotsHistory = (): CleanDotsHistory => {
    return {
        type: CLEAN_DOTS_HISTORY,
    }
}
