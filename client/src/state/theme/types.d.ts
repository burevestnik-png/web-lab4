import { CHANGE_THEME } from './actionTypes'

interface ThemeState {
    readonly mode: 'light' | 'dark'
}

interface ChangeThemeAction {
    type: typeof CHANGE_THEME
}

type ThemeActionTypes = ChangeThemeAction
