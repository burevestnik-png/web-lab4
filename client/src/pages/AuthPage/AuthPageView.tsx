import Footer from '@components/Footer'
import PageLogo from '@components/Logo'
import SizedBox from '@components/SizedBox'
import ThemeSwitcher from '@components/ThemeSwitcher'
import React, { FunctionComponent, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeTheme } from '@state/theme/actionCreators'
import Modal from './components/modal/Modal'
import ModalButton from './components/modal/ModalButton'
import ModalWrapper from './components/modal/ModalWrapper'
import PageContent from './components/page/PageContent'
import PageHeader from './components/page/PageHeader'

const AuthPageView: FunctionComponent = () => {
    const [isModalOpened, setModalState] = useState(false)
    const dispatch = useDispatch()

    const themeChangeAction = useCallback(() => {
        dispatch(changeTheme())
    }, [])

    return (
        <>
            <PageLogo />
            <ThemeSwitcher onClick={themeChangeAction} />
            <PageHeader />
            <SizedBox height={'3rem'} />
            <PageContent />
            <SizedBox height={'4rem'} />
            <Footer />
            <ModalWrapper className={isModalOpened ? 'is-open' : ''}>
                <Modal />
                <ModalButton onClick={() => setModalState(true)}>Авторизация</ModalButton>
            </ModalWrapper>
        </>
    )
}

export default AuthPageView
