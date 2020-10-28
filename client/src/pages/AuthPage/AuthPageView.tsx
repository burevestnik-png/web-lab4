import React, { FunctionComponent, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import PageWrapper from './components/page/PageWrapper'

const StyledScrollDown = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: darken(#8c7569, 5%);
    font-size: 32px;
    font-weight: 800;
    transform: translate(-50%, -50%);

    svg {
        margin-top: 16px;
        width: 52px;
        fill: black;
    }
`

const ModalTitle = styled.h1`
    font-size: 26px;
    margin: 0;
    font-weight: 400;
    color: #55311c;
`

const ModalDescription = styled.p`
    margin: 6px 0 30px 0;
`

const StyledInputBlock = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 10px 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 20px;
    transition: 0.3s;

    input {
        outline: 0;
        border: 0;
        padding: 4px 0 0;
        font-size: 14px;
        font-family: 'Nunito', sans-serif;

        &::placeholder {
            color: #ccc;
            opacity: 1;
        }
    }

    label {
        font-size: 11px;
        text-transform: uppercase;
        font-family: 'Nunito', sans-serif;
        font-weight: 600;
        letter-spacing: 0.7px;
        color: #8c7569;
        transition: 0.3s;
    }

    &:focus-within {
        border-color: #8c7569;

        .input-label {
            color: rgba(#8c7569, 0.8);
        }
    }
`

const ModalEmailInput: FunctionComponent = () => (
    <StyledInputBlock>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Email" />
    </StyledInputBlock>
)

const ModalPasswordInput: FunctionComponent = () => (
    <StyledInputBlock>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" placeholder="Password" />
    </StyledInputBlock>
)

const StyledModalButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        color: rgba(#333, 0.6);
        font-size: 14px;
    }
`

const InputButton = styled.button`
    padding: 8px 12px;
    outline: none;
    border: 0;
    color: #fff;
    border-radius: 4px;
    background: #8c7569;
    font-family: 'Nunito', sans-serif;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        background: #55311c;
    }
`

const ModalButtons: FunctionComponent = () => (
    <StyledModalButtons>
        <a href="" className="">
            Forgot your password?
        </a>
        <InputButton>Login</InputButton>
    </StyledModalButtons>
)

const SignUpText = styled.p`
    margin: 60px 0 0;
    font-size: 14px;
    text-align: center;

    a {
        color: #8c7569;
    }
`

const ModalContainer = styled.div`
    display: flex;
    max-width: 720px;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    transition-duration: 0.3s;
    background: #fff;
    transform: translateY(100px) scale(0.4);
`

const ModalLeft = styled.div`
    padding: 60px 30px 20px;
    background: #fff;
    flex: 1.5;
    transition-duration: 0.5s;
    transform: translateY(80px);
    opacity: 0;
`

const ModalRight = styled.div`
    flex: 2;
    font-size: 0;
    transition: 0.3s;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        transform: scale(2);
        object-fit: cover;
        transition-duration: 1.2s;
    }
`

const ModalButton = styled.button`
    color: darken(#8c7569, 5%);
    font-family: 'Nunito', sans-serif;
    font-size: 18px;
    cursor: pointer;
    border: 0;
    outline: 0;
    padding: 10px 40px;
    border-radius: 30px;
    background: rgb(255, 255, 255);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.16);
    transition: 0.3s;

    &:hover {
        border-color: rgba(255, 255, 255, 0.2);
        background: rgba(#fff, 0.8);
    }
`

const Modal = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 60px;
    background: rgba(#333, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.4s;

    &.is-open {
        height: 100%;
        background: rgba(#333, 0.85);

        ${ModalButton} {
            opacity: 0;
        }

        ${ModalContainer} {
            opacity: 1;
            transition-duration: 0.6s;
            pointer-events: auto;
            transform: translateY(0) scale(1);
        }

        ${ModalRight} img {
            transform: scale(1);
        }

        ${ModalLeft} {
            transform: translateY(0);
            opacity: 1;
            transition-delay: 0.1s;
        }
    }
`

const IconButton = styled.button`
    outline: 0;
    position: absolute;
    right: 10px;
    top: 12px;
    width: 32px;
    height: 32px;
    border: 0;
    background: 0;
    padding: 0;
    cursor: pointer;
`

const AuthPageView: FunctionComponent = () => {
    const [isModalOpened, setModalState] = useState(false)
    return (
        <>
            <PageWrapper />
            <Modal className={isModalOpened ? 'is-open' : ''}>
                <ModalContainer>
                    <ModalLeft>
                        <ModalTitle>Welcome!</ModalTitle>
                        <ModalDescription>
                            Fanny pack hexagon food truck, street art waistcoat kitsch.
                        </ModalDescription>
                        <ModalEmailInput />
                        <ModalPasswordInput />
                        <ModalButtons />
                        <SignUpText>
                            Don't have an account? <a href="#">Sign up now</a>
                        </SignUpText>
                    </ModalLeft>
                    <ModalRight>
                        <img
                            src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
                            alt=""
                        />
                    </ModalRight>
                    <IconButton onClick={() => setModalState(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                            <path d="M 25 3 C 12.86158 3 3 12.86158 3 25 C 3 37.13842 12.86158 47 25 47 C 37.13842 47 47 37.13842 47 25 C 47 12.86158 37.13842 3 25 3 z M 25 5 C 36.05754 5 45 13.94246 45 25 C 45 36.05754 36.05754 45 25 45 C 13.94246 45 5 36.05754 5 25 C 5 13.94246 13.94246 5 25 5 z M 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.980469 15.990234 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 z" />
                        </svg>
                    </IconButton>
                </ModalContainer>
                <ModalButton onClick={() => setModalState(true)}>Click here to login</ModalButton>
            </Modal>
        </>
    )
}

export default AuthPageView
