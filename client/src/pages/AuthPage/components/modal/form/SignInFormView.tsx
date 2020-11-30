import FormInput from '@components/FormInput'
import { SizedBox } from '@components/SizedBox'
import { useFormInput } from '@hooks/index'
import React, { ChangeEvent, FormEvent, FunctionComponent } from 'react'
import { Form, FormButton } from './index'

interface SignInFormViewProps {
    readonly handleSubmit: (e: FormEvent) => void
    readonly onLoginChange: (e: ChangeEvent<HTMLInputElement>) => void
    readonly onPasswordChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const SignInFormView: FunctionComponent<SignInFormViewProps> = ({
    handleSubmit,
    onLoginChange,
    onPasswordChange,
}) => {
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
                onChange={onLoginChange}
            />
            <SizedBox height={'1.4rem'} />
            <FormInput
                id="sign-in-password"
                type="password"
                label="Password"
                required
                variant="outlined"
                size="small"
                onChange={onPasswordChange}
            />
            <SizedBox height={'1rem'} />
            <FormButton>Войти</FormButton>
        </Form>
    )
}

export { SignInFormView }
