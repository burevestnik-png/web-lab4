import * as actionTypes from './actionTypes'
import { ThemeActionTypes } from './types'

export const changeTheme = (): ThemeActionTypes => {
    return {
        type: actionTypes.CHANGE_THEME,
    }
}
