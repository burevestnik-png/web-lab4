import { useFormInput } from '@hooks/useFormInput'
import { AppState } from '@state/types'
import { cleanErrors, registerUser } from '@state/user/actions'
import { showErrorSnack } from '@utils/SnackBarService'
import _ from 'lodash'
import { useSnackbar } from 'notistack'
import React, { FC, FormEvent, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { SignUpFormView } from './SignUpFormView'

const validators: Validator[] = [
    {
        type: 'NULL_SAFETY',
        isValid: (value) => value !== '',
        errorMessage: 'Переменная Y не может быть пустой строкой',
    },
]

const SignUpFormContainer: FC = () => {
    const { error: loginError, ...loginInput } = useFormInput(validators)
    const { error: passwordError, ...passwordInput } = useFormInput(validators)
    const dispatch = useDispatch()
    const snack = useSnackbar()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        dispatch(registerUser(loginInput.value, passwordInput.value, snack))
    }

    return (
        <SignUpFormView
            handleSubmit={handleSubmit}
            onLoginChange={loginInput.onChange}
            onPasswordChange={passwordInput.onChange}
        />
    )
}

export default SignUpFormContainer
