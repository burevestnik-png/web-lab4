import {
    CalculationFormActionTypes,
    CalculationFormState,
} from '@state/calculationForm/types'

const initialState: CalculationFormState = {
    x: null,
    y: null,
    r: 5,
}

export const calculationFormReducer = (
    state: CalculationFormState = initialState,
    action: CalculationFormActionTypes,
): CalculationFormState => {
    switch (action.type) {
        case 'UPDATE_R':
            return {
                ...state,
                r: action.nextValue,
            }
        case 'UPDATE_X':
            return {
                ...state,
                x: action.nextValue,
            }
        case 'UPDATE_Y':
            return {
                ...state,
                y: action.nextValue,
            }
        case 'CLEAN_FORM':
            return initialState
        default:
            return state
    }
}
