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
        default:
            return state
    }
}
