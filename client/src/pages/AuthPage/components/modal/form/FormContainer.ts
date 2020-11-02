import styled from 'styled-components'

const FormContainer = styled.div`
    top: 0;
    height: 100%;
    position: absolute;
    transition: all 0.6s ease-in-out;
`

export const SignUpFormContainer = styled(FormContainer)`
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
`

export const SignInFormContainer = styled(FormContainer)`
    left: 0;
    width: 50%;
    z-index: 2;
`
