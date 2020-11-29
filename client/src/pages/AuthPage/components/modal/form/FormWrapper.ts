import styled from 'styled-components'

const FormWrapper = styled.div`
    top: 0;
    height: 100%;
    position: absolute;
    transition: all 0.6s ease-in-out;
`

export const SignUpFormWrapper = styled(FormWrapper)`
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
`

export const SignInFormWrapper = styled(FormWrapper)`
    left: 0;
    width: 50%;
    z-index: 2;
`
