import { GET_DOTS, GET_DOTS_SUCCESS } from '@state/dot/actionTypes'

const initialState: DotState = {
    dots: [],
    loading: false,
}

export const dotReducer = (
    state: DotState = initialState,
    action: SvgStateActions,
): DotState => {
    switch (action.type) {
        case 'ADD_DOT':
            return {
                loading: true,
                dots: [...state.dots, action.dot],
            }
        case 'DOT_SUCCESS':
            return {
                ...state,
                loading: false,
            }
        case 'DOT_FAIL':
            return {
                ...state,
                loading: false,
            }
        case 'CLEAN_DOTS_HISTORY':
            return initialState
        case GET_DOTS_SUCCESS:
            return {
                loading: false,
                dots: action.dots,
            }
        case GET_DOTS:
            return {
                ...state,
                loading: true,
            }
        default:
            return state
    }
}
