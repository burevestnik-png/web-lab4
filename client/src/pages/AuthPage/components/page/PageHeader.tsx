import { Container } from '@components/Container'
import { Navigation, NavItem, ScrollNavItem } from '@components/HeaderNavigation'
import { PageLogo } from '@components/Logo'
import { SizedBox } from '@components/SizedBox'
import ThemeSwitcher from '@components/ThemeSwitch'
import { blackLighten1 } from '@theme/constants'
import React, { FunctionComponent, MutableRefObject } from 'react'
import { ComponentSize } from '@rehooks/component-size'
import { Description, Header, HeaderContentWrapper, Statistics, StatItem } from './header'

type PageHeaderProps = {
    readonly headerRef: MutableRefObject<HTMLDivElement>
    readonly height: ComponentSize
}

const PageHeader: FunctionComponent<PageHeaderProps> = ({ headerRef, height }) => (
    <Container ref={headerRef} color={blackLighten1} paddingBottom="3rem">
        <Navigation>
            <PageLogo type={'embedded'} />
            <NavItem to="/calculations">Вычисления</NavItem>
            <ScrollNavItem spy={true} smooth={true} to="services">
                Услуги
            </ScrollNavItem>
            <ScrollNavItem spy={true} smooth={true} to="projects">
                Проекты
            </ScrollNavItem>
            <ThemeSwitcher headerSize={height} type={'embedded'} />
        </Navigation>

        <HeaderContentWrapper>
            <Header>Веб приложения и DevOps услуги</Header>
            <Description>
                Разрабатываем лабораторные по веб-программированию <br /> и услуги по DevOps'у
                Совмещаем продуктовый подход <br />и высокую инженерную культуру.
            </Description>

            <SizedBox height={'5rem'} transparent />

            <Statistics>
                <StatItem>
                    <span>3 месяца</span>
                    <span>работы с вебом</span>
                </StatItem>

                <StatItem>
                    <span>2</span>
                    <span>студента</span>
                </StatItem>

                <StatItem>
                    <span>3</span>
                    <span>сданных лабы</span>
                </StatItem>
            </Statistics>
        </HeaderContentWrapper>
    </Container>
)

export default PageHeader
