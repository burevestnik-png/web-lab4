import {
    CLEAN_ERROR,
    LOG_OUT,
    REGISTER_USER,
    REGISTER_USER_FAIL,
    REGISTER_USER_SUCCESS,
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
        case REGISTER_USER_FAIL:
            return {
                ...state,
                errors: [...state.errors, action.message],
                loading: false,
            }
        case REGISTER_USER_SUCCESS:
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
        default:
            return state
    }
}
