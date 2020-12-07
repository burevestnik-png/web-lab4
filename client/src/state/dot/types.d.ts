import {
    ADD_DOT,
    CLEAN_DOTS_HISTORY,
    DOT_FAIL,
    DOT_SUCCESS,
    GET_DOTS,
} from '@state/dot/actionTypes'
import { ApiResponse } from '@state/types'
import { ProviderContext } from 'notistack'
import Dot from '../../pages/CalculationPage/components/graph/svgElements/Dot'

export {}

declare global {
    interface DotState {
        dots: Dot[]
        loading: boolean
    }

    interface DotRawResponse extends ApiResponse {
        executionTime: number
        hit: boolean
        id: number
        r: number
        userId: number
        x: number
        y: number
    }

    interface AddDotAction {
        type: typeof ADD_DOT
        dot: Dot
        snack: ProviderContext
    }

    interface DotsSuccess {
        type: typeof DOT_SUCCESS
        dot: Dot
    }

    interface DotsFail {
        type: typeof DOT_FAIL
        message: string
    }

    interface CleanDotsHistory {
        type: typeof CLEAN_DOTS_HISTORY
    }

    interface GetDotsAction {
        type: typeof GET_DOTS
    }

    type SvgStateActions =
        | AddDotAction
        | DotsSuccess
        | CleanDotsHistory
        | DotsFail
        | GetDotsAction
}
