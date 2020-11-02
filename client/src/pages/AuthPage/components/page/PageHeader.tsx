import { Container } from '@components/Container'
import { SizedBox } from '@components/SizedBox'
import { blackLighten1 } from '@theme/constants'
import React from 'react'
import {
    Description,
    Header,
    HeaderContentWrapper,
    Navigation,
    NavItem,
    Statistics,
    StatItem,
} from './header'

const PageHeader = () => (
    <Container color={blackLighten1} paddingBottom="3rem">
        <Navigation>
            <NavItem>Вычисления</NavItem>
            <NavItem>Проекты</NavItem>
            <NavItem>Контакты</NavItem>
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
