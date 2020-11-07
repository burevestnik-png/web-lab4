import { Footer } from '@components/Footer'
import { PageLogo } from '@components/Logo'
import { SizedBox } from '@components/SizedBox'
import ThemeSwitcher from '@components/ThemeSwitch'
import React, { FunctionComponent, useRef, useState } from 'react'
import { Modal, ModalButton, ModalWrapper } from './components/modal'
import { PageContent, PageHeader } from './components/page'
import useComponentSize from '@rehooks/component-size'

export type AuthPageViewProps = {
    readonly themeChangeAction: () => void
}

const AuthPageView: FunctionComponent<AuthPageViewProps> = ({ themeChangeAction = () => {} }) => {
    const [isModalOpened, setModalState] = useState<boolean>(false)
    const pageHeaderRef = useRef<HTMLDivElement>(null)
    const pageHeaderSize = useComponentSize<HTMLDivElement>(pageHeaderRef)

    return (
        <>
            <PageLogo />
            <ThemeSwitcher onClick={themeChangeAction} headerSize={pageHeaderSize} />
            <PageHeader headerRef={pageHeaderRef} />
            <SizedBox height={'3rem'} />
            <PageContent />
            <SizedBox height={'4rem'} />
            <Footer />
            <ModalWrapper className={isModalOpened ? 'is-open' : ''}>
                <Modal onClose={() => setModalState(false)} />
                <ModalButton onClick={() => setModalState(true)}>Авторизация</ModalButton>
                <ModalButton className={'responsive'} onClick={() => setModalState(true)}>
                    <i className={'material-icons large'}>account_box</i>
                </ModalButton>
            </ModalWrapper>
        </>
    )
}

export default AuthPageView
