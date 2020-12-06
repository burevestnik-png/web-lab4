const initialState: DotState = {
    dots: [],
}

export const dotReducer = (
    state: DotState = initialState,
    action: SvgStateActions,
): DotState => {
    switch (action.type) {
        case 'ADD_DOT':
            return {
                dots: [...state.dots, action.dot],
            }
        case 'DOT_SUCCESS':
            const { dots } = state
            return {
                dots: [
                    ...dots,
                    (dots[
                        dots.findIndex((value) => value.id === action.dot.id)
                    ] = action.dot),
                ],
            }
        case 'CLEAN_DOTS_HISTORY':
            return initialState
        default:
            return state
    }
}
