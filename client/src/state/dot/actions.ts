import {
    ADD_DOT,
    CLEAN_DOTS_HISTORY,
    DOT_FAIL,
    DOT_SUCCESS,
    GET_DOTS,
    GET_DOTS_SUCCESS,
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

export const dotsSuccess = (
    dot: Dot,
    response: DotRawResponse,
): DotsSuccess => {
    dot.executionTime = response.executionTime
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

export const getDots = (): GetDotsAction => {
    return {
        type: GET_DOTS,
    }
}

export const getDotsSuccess = (dots: Dot[]): GetDotsSuccess => {
    return {
        type: GET_DOTS_SUCCESS,
        dots: dots ?? [],
    }
}
