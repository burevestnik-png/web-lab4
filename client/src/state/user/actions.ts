import {
    CLEAN_ERROR,
    LOG_OUT,
    LOGIN_USER,
    REGISTER_USER,
    AUTH_FAIL,
    AUTH_SUCCESS,
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

export const loginUser = (
    login: string,
    password: string,
    snack: ProviderContext,
): LoginUserAction => {
    return {
        type: LOGIN_USER,
        login,
        password,
        snack,
    }
}

export const authSuccess = (data: AuthRawResponse): AuthSuccessAction => {
    localStorage.setItem('accessToken', data.accessToken)
    localStorage.setItem('refreshToken', data.refreshToken)
    return {
        type: AUTH_SUCCESS,
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

export const authFail = (message: string | any): AuthFailAction => {
    return {
        type: AUTH_FAIL,
        message,
    }
}

export const cleanErrors = (): CleanErrorAction => {
    return {
        type: CLEAN_ERROR,
    }
}
