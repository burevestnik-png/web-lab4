import {
    CLEAN_FORM,
    UPDATE_R,
    UPDATE_X,
    UPDATE_Y,
} from '@state/calculationForm/actionTypes'

interface CalculationFormState {
    x: number
    y: number
    r: number
}

interface UpdateXAction {
    type: typeof UPDATE_X
    nextValue: number
}

interface UpdateYAction {
    type: typeof UPDATE_Y
    nextValue: number
}

interface UpdateRAction {
    type: typeof UPDATE_R
    nextValue: number
}

interface CleanForm {
    type: typeof CLEAN_FORM
}

type CalculationFormActionTypes =
    | UpdateXAction
    | UpdateRAction
    | UpdateYAction
    | CleanForm
