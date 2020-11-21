import FormInput from '@components/FormInput'
import { SizedBox } from '@components/SizedBox'
import { useFormInput } from '@hooks/index'
import React, { FunctionComponent } from 'react'
import { Form, FormButton } from './index'

const SignInForm: FunctionComponent = () => {
    const loginInput = useFormInput()
    const passwordInput = useFormInput()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(loginInput.value, passwordInput.value)
    }

    return (
        <Form autoComplete="off" onSubmit={handleSubmit}>
            <h1>Войти через существующий аккаунт</h1>
            <SizedBox height={'1rem'} />
            <FormInput
                id="sign-in-login"
                label="Login"
                required
                variant="outlined"
                size="small"
                {...loginInput}
            />
            <SizedBox height={'1.4rem'} />
            <FormInput
                id="sign-in-password"
                type="password"
                label="Password"
                required
                variant="outlined"
                size="small"
                {...passwordInput}
            />
            <SizedBox height={'1rem'} />
            <FormButton>Войти</FormButton>
        </Form>
    )
}

export { SignInForm }
