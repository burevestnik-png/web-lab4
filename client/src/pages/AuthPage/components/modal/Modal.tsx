import Button from '@components/Button'
import { primaryColor, secondaryColor } from '@theme/colorTheme'
import { show } from '@utils/keyframes'
import React, { FunctionComponent, useState } from 'react'
import styled from 'styled-components'
import { Form, FormButton, FormInput, SignInFormContainer, SignUpFormContainer } from './form'
import Overlay from './overlay/Overlay'
import OverlayContainer from './overlay/OverlayContainer'
import { OverlayLeft, OverlayRight } from './overlay/OverlayPanel'

export const StyledModal = styled.div`
    display: flex;
    max-width: 720px;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    position: absolute;
    opacity: 0;
    pointer-events: none;

    background: ${secondaryColor};
    color: ${primaryColor};

    transition-duration: 0.3s;
    transform: translateY(100px) scale(0.4);

    &.right-panel-active ${SignInFormContainer} {
        transform: translateX(100%);
    }

    &.right-panel-active ${SignUpFormContainer} {
        transform: translateX(100%);
        opacity: 1;
        z-index: 5;
        animation: ${show} 0.6s;
    }

    &.right-panel-active ${Overlay} {
        transform: translateX(50%);
    }

    &.right-panel-active ${OverlayContainer} {
        transform: translateX(-100%);
    }

    &.right-panel-active ${OverlayLeft} {
        transform: translateX(0);
    }

    &.right-panel-active ${OverlayRight} {
        transform: translateX(20%);
    }
`

const Modal: FunctionComponent = () => {
    const [isRightPanelActive, setRightPanelState] = useState<boolean>(false)

    return (
        <StyledModal className={isRightPanelActive ? 'right-panel-active' : ''}>
            <SignInFormContainer>
                <Form action="#">
                    <h1>Войти через существующий аккаунт</h1>
                    <FormInput type="text" placeholder="Login" />
                    <FormInput type="password" placeholder="Password" />
                    <FormButton>Войти</FormButton>
                </Form>
            </SignInFormContainer>
            <SignUpFormContainer>
                <Form action="#">
                    <h1>Создайте аккаунт</h1>
                    <FormInput type="text" placeholder="Login" />
                    <FormInput type="password" placeholder="Password" />
                    {/*<a href="#">Forgot your password?</a>*/}
                    <FormButton>Регистрация</FormButton>
                </Form>
            </SignUpFormContainer>
            <OverlayContainer>
                <Overlay>
                    <OverlayLeft>
                        <h1>С возвращением!</h1>
                        <p>Чтобы быть с нами на связи, пожалуйста, войдите</p>
                        <Button fontSize={0.8} onClick={() => setRightPanelState(false)}>
                            Войти
                        </Button>
                    </OverlayLeft>
                    <OverlayRight>
                        <h1>Привет!</h1>
                        <p>Создайте свой аккаунт, чтобы начать путешествие с нами</p>
                        <Button fontSize={0.8} onClick={() => setRightPanelState(true)}>
                            Зарегистрироваться
                        </Button>
                    </OverlayRight>
                </Overlay>
            </OverlayContainer>
        </StyledModal>
    )
}

export default Modal
