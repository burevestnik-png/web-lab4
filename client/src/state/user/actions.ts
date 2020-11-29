import {
    CLEAN_ERROR,
    LOG_OUT,
    REGISTER_USER,
    REGISTER_USER_FAIL,
    REGISTER_USER_SUCCESS,
} from '@state/user/actionTypes'
import { ProviderContext } from 'notistack'

export const registerUser = (
    login: string,
    password: string,
    snack: ProviderContext,
): RegisterUserAction => {
    return {
        type: REGISTER_USER,
        login,
        password,
        snack,
    }
}

export const registerUserSuccess = (
    data: RegisterRawResponse,
): RegisterUserSuccessAction => {
    localStorage.setItem('accessToken', data.accessToken)
    localStorage.setItem('refreshToken', data.refreshToken)
    return {
        type: REGISTER_USER_SUCCESS,
        payload: data,
    }
}

export const logOut = (): LogOutAction => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    return {
        type: LOG_OUT,
    }
}

export const registerUserFail = (
    message: string | any,
): RegisterUserFailAction => {
    return {
        type: REGISTER_USER_FAIL,
        message,
    }
}

export const cleanErrors = (): CleanErrorAction => {
    return {
        type: CLEAN_ERROR,
    }
}
