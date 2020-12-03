const initialState: SvgState = {
    dots: [],
}

export const svgReducer = (
    state: SvgState = initialState,
    action: SvgStateActions,
): SvgState => {
    switch (action.type) {
        case 'ADD_DOT':
            return {
                dots: [...state.dots, action.dot],
            }
        default:
            return state
    }
}
