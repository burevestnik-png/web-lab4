import { Container } from '@components/Container'
import { PageLogo } from '@components/Logo'
import { SizedBox } from '@components/SizedBox'
import ThemeSwitcher from '@components/ThemeSwitch'
import { blackLighten1 } from '@theme/constants'
import React, { FunctionComponent, MutableRefObject } from 'react'
import { ComponentSize } from '@rehooks/component-size'
import {
    Description,
    Header,
    HeaderContentWrapper,
    Navigation,
    NavItem,
    Statistics,
    StatItem,
} from './header'

type PageHeaderProps = {
    readonly headerRef: MutableRefObject<HTMLDivElement>
    readonly themeChangeAction: () => void
    readonly height: ComponentSize
}

const PageHeader: FunctionComponent<PageHeaderProps> = ({
    headerRef,
    themeChangeAction = () => {},
    height,
}) => (
    <Container ref={headerRef} color={blackLighten1} paddingBottom="3rem">
        <Navigation>
            <PageLogo type={'embedded'} />
            <NavItem>Вычисления</NavItem>
            <NavItem>Проекты</NavItem>
            <NavItem>Контакты</NavItem>
            <ThemeSwitcher onClick={themeChangeAction} headerSize={height} type={'embedded'} />
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
