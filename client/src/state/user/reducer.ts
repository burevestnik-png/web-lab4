import {
    CLEAN_ERROR,
    LOG_OUT,
    REGISTER_USER,
    AUTH_FAIL,
    AUTH_SUCCESS,
    REFRESH_TOKEN,
} from '@state/user/actionTypes'

const initialState: UserTokensState = {
    accessToken: '',
    refreshToken: '',
    errors: [],
    loading: false,
}

export const userTokensReducer = (
    state: UserTokensState = initialState,
    action: UserTokensActions,
): UserTokensState => {
    switch (action.type) {
        case REGISTER_USER:
            return {
                ...state,
                loading: true,
            }
        case AUTH_FAIL:
            return {
                ...state,
                errors: [...state.errors, action.message],
                loading: false,
            }
        case AUTH_SUCCESS:
            return {
                ...state,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
                loading: false,
            }
        case LOG_OUT:
            return {
                ...state,
                accessToken: '',
                refreshToken: '',
            }
        case CLEAN_ERROR:
            return {
                ...state,
                errors: [],
            }
        case REFRESH_TOKEN:
            return {
                ...state,
                loading: true,
            }
        default:
            return state
    }
}
