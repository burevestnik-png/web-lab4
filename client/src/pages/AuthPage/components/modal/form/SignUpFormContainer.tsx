import { useFormInput } from '@hooks/useFormInput'
import { registerUser } from '@state/user/actions'
import { showErrorSnack } from '@utils/services/snackBarService'
import { useSnackbar } from 'notistack'
import React, { FC, FormEvent, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { SignUpFormView } from './SignUpFormView'

const createValidators = (inputType: 'login' | 'password'): Validator[] => {
    const inputName = inputType === 'login' ? 'Логин' : 'Пароль'
    const regexp: RegExp =
        inputType === 'login'
            ? /^[\wА-я]{3,20}$/
            : /^[\wА-я!"#$%&'()*+,./:;<=>?@^_`{|}~]{3,20}$/

    return [
        {
            type: 'NULL_SAFETY',
            isValid: (value) => value !== '',
            errorMessage: `${inputName} не может быть пустым`,
        },
        {
            type: 'RANGE',
            isValid: (value) => value.length >= 3 && value.length <= 20,
            errorMessage: `${inputName} должен быть длиной от 3 до 20 символов`,
        },
        {
            type: 'REGEXP',
            isValid: (value) => regexp.test(value),
            errorMessage: `${inputName} содержит недопустимые символы`,
        },
    ]
}

const SignUpFormContainer: FC = () => {
    const {
        validationState: loginValidationState,
        ...loginInput
    } = useFormInput(createValidators('login'))
    const {
        validationState: passwordValidationState,
        ...passwordInput
    } = useFormInput(createValidators('password'))
    const dispatch = useDispatch()
    const snack = useSnackbar()

    useEffect(() => {
        return () => {
            const { error, cleanError } = loginValidationState
            if (loginValidationState.errorType === 'RANGE') return
            showErrorSnack(error, snack)
            cleanError()
        }
    }, [loginValidationState.error, loginValidationState.cleanError])

    useEffect(() => {
        return () => {
            const { error, cleanError } = passwordValidationState
            if (passwordValidationState.errorType === 'RANGE') return
            showErrorSnack(error, snack)
            cleanError()
        }
    }, [passwordValidationState.error, passwordValidationState.cleanError])

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (loginValidationState.isValid && passwordValidationState.isValid) {
            dispatch(registerUser(loginInput.value, passwordInput.value, snack))
        } else {
            if (
                !loginValidationState.isValid &&
                loginValidationState.errorType === 'RANGE'
            ) {
                showErrorSnack(
                    'Логин должен содержать от 3 до 20 символов',
                    snack,
                )
            }

            if (
                !passwordValidationState.isValid &&
                passwordValidationState.errorType === 'RANGE'
            ) {
                showErrorSnack(
                    'Пароль должен содержать от 3 до 20 символов',
                    snack,
                )
            }

            if (
                (!loginValidationState.isValid &&
                    loginValidationState.errorType === 'REGEXP') ||
                (!passwordValidationState.isValid &&
                    passwordValidationState.errorType === 'REGEXP')
            ) {
                showErrorSnack('Введены некорректные символы', snack)
            }
        }
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
