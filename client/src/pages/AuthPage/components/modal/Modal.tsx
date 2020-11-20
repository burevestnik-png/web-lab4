import { primaryColor, secondaryColor } from '@theme/colorTheme'
import { PHONE } from '@theme/constants'
import { show } from '@utils/keyframes'
import React, { FunctionComponent, useState } from 'react'
import styled from 'styled-components'
import CloseButton, { IconButton } from './CloseButton'
import { SignInForm, SignInFormContainer, SignUpForm, SignUpFormContainer } from './form'
import { Overlay, OverlayButton, OverlayContainer, OverlayLeft, OverlayRight } from './overlay'

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

    &.right-panel-active {
        ${SignInFormContainer} {
            transform: translateX(100%);
        }

        ${SignUpFormContainer} {
            transform: translateX(100%);
            opacity: 1;
            z-index: 5;
            animation: ${show} 0.6s;
        }

        ${Overlay} {
            transform: translateX(50%);
        }

        ${OverlayContainer} {
            transform: translateX(-100%);
        }

        ${OverlayLeft} {
            transform: translateX(0);
        }

        ${OverlayRight} {
            transform: translateX(20%);
        }

        ${IconButton} {
            fill: black;
        }
    }

    @media (max-width: ${PHONE}px) {
        height: 100%;
        min-width: 100%;
    }
`

export type ModalProps = {
    readonly onClose: () => void
}

const Modal: FunctionComponent<ModalProps> = ({ onClose = () => {} }) => {
    const [isSignInMode, changeMode] = useState<boolean>(false)

    return (
        <StyledModal className={isSignInMode ? 'right-panel-active' : ''}>
            <SignInFormContainer>
                <SignInForm />
            </SignInFormContainer>
            <SignUpFormContainer>
                <SignUpForm />
            </SignUpFormContainer>

            <OverlayContainer>
                <Overlay>
                    <OverlayLeft>
                        <h1>С возвращением!</h1>
                        <p>Чтобы быть с нами на связи, пожалуйста, войдите</p>
                        <OverlayButton onClick={() => changeMode(false)}>Войти</OverlayButton>
                    </OverlayLeft>
                    <OverlayRight>
                        <h1>Привет!</h1>
                        <p>Создайте свой аккаунт, чтобы начать путешествие с нами</p>
                        <OverlayButton onClick={() => changeMode(true)}>
                            Зарегистрироваться
                        </OverlayButton>
                    </OverlayRight>
                </Overlay>
            </OverlayContainer>

            <CloseButton onClick={onClose} />
        </StyledModal>
    )
}

export default Modal
