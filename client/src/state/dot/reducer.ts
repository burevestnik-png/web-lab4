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
        default:
            return state
    }
}
