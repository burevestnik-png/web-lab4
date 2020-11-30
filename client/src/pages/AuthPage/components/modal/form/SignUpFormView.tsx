import FormInput from '@components/FormInput'
import { SizedBox } from '@components/SizedBox'
import { useFormInput } from '@hooks/useFormInput'
import { Tooltip } from '@material-ui/core'
import { registerUser } from '@state/user/actions'
import React, { ChangeEvent, FormEvent, FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'
import { Form, FormButton } from './index'

interface SignUpFormViewProps {
    readonly handleSubmit: (e: FormEvent) => void
    readonly onLoginChange: (e: ChangeEvent<HTMLInputElement>) => void
    readonly onPasswordChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const SignUpFormView: FunctionComponent<SignUpFormViewProps> = ({
    handleSubmit,
    onLoginChange,
    onPasswordChange,
}) => {
    return (
        <Form autoComplete="off" onSubmit={handleSubmit}>
            <h1>Создайте аккаунт</h1>
            <SizedBox height={'1rem'} />
            <Tooltip
                title="Допустимые символы: буквы латинского алфавита, цифры и _"
                placement={'top'}>
                <FormInput
                    id="sign-up-login"
                    label="Login"
                    required
                    variant="outlined"
                    size="small"
                    onChange={onLoginChange}
                />
            </Tooltip>
            <SizedBox height={'1.4rem'} />
            <Tooltip
                title="Допустимые символы: буквы латинского алфавита, цифры и #$%&'()*+,./:;<=>?@^_`{|}~"
                placement={'top'}>
                <FormInput
                    id="sign-up-password"
                    type="password"
                    label="Password"
                    required
                    variant="outlined"
                    size="small"
                    onChange={onPasswordChange}
                />
            </Tooltip>
            <SizedBox height={'1rem'} />
            <FormButton>Регистрация</FormButton>
        </Form>
    )
}

export { SignUpFormView }
