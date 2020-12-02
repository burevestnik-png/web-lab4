import { ThemeActionTypes, ThemeState } from './types'

const initialState: ThemeState = {
    mode: 'light',
}

export const themeReducer = (state = initialState, action: ThemeActionTypes): ThemeState => {
    switch (action.type) {
        case 'CHANGE_THEME':
            return {
                mode: state.mode == 'light' ? 'dark' : 'light',
            }
        default:
            return state
    }
}
