import { ApiResponse } from '@state/types'
import {
    CLEAN_ERROR,
    LOG_OUT,
    REGISTER_USER,
    REGISTER_USER_FAIL,
    REGISTER_USER_SUCCESS,
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

    interface RegisterRawResponse extends ApiResponse {
        accessToken: string
        refreshToken: string
    }

    interface RegisterUserAction {
        type: typeof REGISTER_USER
        login: string
        password: string
        snack: ProviderContext
    }

    interface RegisterUserSuccessAction {
        type: typeof REGISTER_USER_SUCCESS
        payload: RegisterRawResponse
    }

    interface RegisterUserFailAction {
        type: typeof REGISTER_USER_FAIL
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
        | RegisterUserFailAction
        | RegisterUserSuccessAction
        | CleanErrorAction
        | LogOutAction
}
