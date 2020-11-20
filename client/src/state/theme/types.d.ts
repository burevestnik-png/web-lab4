import { CHANGE_THEME } from './actionTypes'

type ThemeMode = 'light' | 'dark'

interface ThemeState {
    readonly mode: ThemeMode
}

interface ChangeThemeAction {
    type: typeof CHANGE_THEME
}

type ThemeActionTypes = ChangeThemeAction
