import { ApiResponse } from '@state/types'
import {
    CLEAN_ERROR,
    LOG_OUT,
    LOGIN_USER,
    REGISTER_USER,
    AUTH_FAIL,
    AUTH_SUCCESS,
} from '@state/user/actionTypes'
import { ProviderContext } from 'notistack'

export {}

declare global {
    interface UserTokensState {
        readonly accessToken: string
        readonly refreshToken: string
        readonly loading?: boolean
        readonly errors?: Array<string>
    }

    interface AuthRawResponse extends ApiResponse {
        accessToken: string
        refreshToken: string
    }

    interface RegisterUserAction {
        type: typeof REGISTER_USER
        login: string
        password: string
        snack: ProviderContext
    }

    interface LoginUserAction {
        type: typeof LOGIN_USER
        login: string
        password: string
        snack: ProviderContext
    }

    interface AuthSuccessAction {
        type: typeof AUTH_SUCCESS
        payload: AuthRawResponse
    }

    interface AuthFailAction {
        type: typeof AUTH_FAIL
        message: string
    }

    interface CleanErrorAction {
        type: typeof CLEAN_ERROR
    }

    interface LogOutAction {
        type: typeof LOG_OUT
    }

    type UserTokensActions =
        | RegisterUserAction
        | AuthFailAction
        | AuthSuccessAction
        | CleanErrorAction
        | LogOutAction
        | LoginUserAction
}
