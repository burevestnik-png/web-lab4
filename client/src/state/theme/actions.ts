import * as actionTypes from './actionTypes'
import { ThemeActionTypes } from './types'

export const changeTheme = (): ThemeActionTypes => {
    const previousMode = localStorage.getItem('theme')
    localStorage.setItem('theme', previousMode == 'light' ? 'dark' : 'light')
    return {
        type: actionTypes.CHANGE_THEME,
    }
}
