import { SizedBox } from '@components/SizedBox'
import { useFormInput } from '@hooks/useFormInput'
import React, { FunctionComponent } from 'react'
import { Form, FormButton, FormInput } from './index'

const SignUpForm: FunctionComponent = () => {
    const loginInput = useFormInput()
    const passwordInput = useFormInput()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(loginInput.value, passwordInput.value)
    }

    return (
        <Form autoComplete="off" onSubmit={handleSubmit}>
            <h1>Создайте аккаунт</h1>
            <SizedBox height={'1rem'} />
            <FormInput
                id="sign-up-login"
                label="Login"
                required
                variant="outlined"
                size="small"
                {...loginInput}
            />
            <SizedBox height={'1.4rem'} />
            <FormInput
                id="sign-up-password"
                type="password"
                label="Password"
                required
                variant="outlined"
                size="small"
                {...passwordInput}
            />
            <SizedBox height={'1rem'} />
            <FormButton>Регистрация</FormButton>
        </Form>
    )
}

export { SignUpForm }
