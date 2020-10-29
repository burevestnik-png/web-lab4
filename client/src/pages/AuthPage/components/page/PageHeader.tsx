import Container from '@components/Container'
import React from 'react'
import HeaderContent from './header/HeaderContent'
import { Navigation, NavItem } from './header/HeaderNavigation'

const PageHeader = () => (
    <Container primaryColor paddingBottom="3rem">
        <Navigation>
            <NavItem>Вычисления</NavItem>
            <NavItem>Проекты</NavItem>
            <NavItem>Контакты</NavItem>
        </Navigation>
        <HeaderContent />
    </Container>
)

export default PageHeader
