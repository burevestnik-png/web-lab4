import {
    CLEAN_FORM,
    UPDATE_R,
    UPDATE_X,
    UPDATE_Y,
} from '@state/calculationForm/actionTypes'
import {
    CleanForm,
    UpdateRAction,
    UpdateXAction,
    UpdateYAction,
} from '@state/calculationForm/types'

export const updateXAction = (nextValue: number): UpdateXAction => {
    return {
        type: UPDATE_X,
        nextValue,
    }
}

export const updateRAction = (nextValue: number): UpdateRAction => {
    return {
        type: UPDATE_R,
        nextValue,
    }
}

export const updateYAction = (nextValue: number): UpdateYAction => {
    return {
        type: UPDATE_Y,
        nextValue,
    }
}

export const cleanForm = (): CleanForm => {
  return {
    type: CLEAN_FORM
  }
}
