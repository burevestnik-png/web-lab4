import { Footer } from '@components/Footer'
import { PageLogo } from '@components/Logo'
import { SizedBox } from '@components/SizedBox'
import ThemeSwitcher from '@components/ThemeSwitch'
import React, { FunctionComponent, useRef, useState } from 'react'
import { Modal, ModalButton, ModalWrapper } from './components/modal'
import { PageContent, PageHeader } from './components/page'
import useComponentSize from '@rehooks/component-size'

export type AuthPageViewProps = {}

const AuthPageView: FunctionComponent<AuthPageViewProps> = () => {
    const [isModalOpened, setModalState] = useState<boolean>(false)
    const pageHeaderRef = useRef<HTMLDivElement>(null)
    const pageHeaderSize = useComponentSize<HTMLDivElement>(pageHeaderRef)

    const onModalOpen = () => {
        setModalState(true)
        document.body.style.overflow = 'hidden'
    }

    const onModalClose = () => {
        setModalState(false)
        document.body.style.overflow = 'initial'
    }

    return (
        <>
            <PageLogo />
            <ThemeSwitcher headerSize={pageHeaderSize} />
            <PageHeader headerRef={pageHeaderRef} height={pageHeaderSize} />
            <SizedBox height={'3rem'} />
            <PageContent />
            <SizedBox height={'4rem'} />
            <Footer />
            <ModalWrapper className={isModalOpened ? 'is-open' : ''}>
                <Modal onClose={onModalClose} />
                <ModalButton onClick={onModalOpen}>Авторизация</ModalButton>
                <ModalButton className={'responsive'} onClick={onModalOpen}>
                    <i className={'material-icons large'}>account_box</i>
                </ModalButton>
            </ModalWrapper>
        </>
    )
}

export default AuthPageView
