import {
    Navigation,
    NavItem,
    ScrollNavItem,
} from '@components/HeaderNavigation'
import { PageLogo } from '@components/Logo'
import LogOutNavItem from '@components/LogOutNavItem'
import ThemeSwitcher from '@components/ThemeSwitch'
import useComponentSize from '@rehooks/component-size'
import { blackLighten1 } from '@theme/constants'
import React, { FunctionComponent, useRef } from 'react'
import styled from 'styled-components'

const ClippedNavigation = styled(Navigation)`
    background-color: ${blackLighten1};
    color: white;

    justify-content: space-between;

    height: 4.5rem;

    div:last-child {
        margin-right: 1.5rem;
    }
`

const Header: FunctionComponent = () => {
    const pageHeaderRef = useRef<HTMLDivElement>(null)
    const pageHeaderSize = useComponentSize<HTMLDivElement>(pageHeaderRef)
    const accessToken = localStorage.getItem('accessToken')

    return (
        <ClippedNavigation ref={pageHeaderRef}>
            <PageLogo type="embedded" />
            <div>
                <NavItem to="/">Главная</NavItem>
                <ScrollNavItem spy={true} smooth={true} to="results">
                    Результаты
                </ScrollNavItem>
                {!!accessToken ? <LogOutNavItem /> : <></>}
            </div>
            <ThemeSwitcher headerSize={pageHeaderSize} />
        </ClippedNavigation>
    )
}

export default Header
