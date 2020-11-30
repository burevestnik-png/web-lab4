import { useFormInput } from '@hooks/useFormInput'
import { loginUser, registerUser } from '@state/user/actions'
import { useSnackbar } from 'notistack'
import React, { FC, FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { SignInFormView } from './SignInFormView'
import { SignUpFormView } from './SignUpFormView'

const validators: Validator[] = [
    {
        type: 'NULL_SAFETY',
        isValid: (value) => value !== '',
        errorMessage: 'вапвап',
    },
]

const SignInFormContainer: FC = () => {
    const { error: loginError, ...loginInput } = useFormInput(validators)
    const { error: passwordError, ...passwordInput } = useFormInput(validators)
    const dispatch = useDispatch()
    const snack = useSnackbar()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        dispatch(loginUser(loginInput.value, passwordInput.value, snack))
    }

    return (
        <SignInFormView
            handleSubmit={handleSubmit}
            onLoginChange={loginInput.onChange}
            onPasswordChange={passwordInput.onChange}
        />
    )
}

export default SignInFormContainer
