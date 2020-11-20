import { Navigation, NavItem, ScrollNavItem } from '@components/HeaderNavigation'
import { PageLogo } from '@components/Logo'
import ThemeSwitcher from '@components/ThemeSwitch'
import React, { FunctionComponent } from 'react'

const Header: FunctionComponent = () => (
    <Navigation>
        <PageLogo type="embedded" />
        <NavItem to="/">Главная</NavItem>
        <ScrollNavItem spy={true} smooth={true} to="results">
            Результаты
        </ScrollNavItem>
        <ThemeSwitcher />
    </Navigation>
)

export default Header
