import SizedBox from '@components/SizedBox'
import { whiteDarken1 } from '@theme/constants'
import React from 'react'
import styled from 'styled-components'
import duckLogo from '@assets/images/company_logo.png'
import { Statistics, StatItem } from './HeaderStatistics'

const HeaderContentWrapper = styled.div`
    background-image: url(${duckLogo});
    background-repeat: no-repeat;
    background-position: 100% 50%;
    background-size: 11rem;
`

const Header = styled.h1`
    font-size: 3.4rem;
`

const Description = styled.p`
    color: ${whiteDarken1};
    font-size: 1.2rem;
    line-height: 1.8rem;
`

const HeaderContent = () => (
    <HeaderContentWrapper>
        <Header>Веб приложения и DevOps услуги</Header>
        <Description>
            Разрабатываем лабораторные по веб-программированию <br /> и услуги по DevOps'у Совмещаем
            продуктовый подход <br />и высокую инженерную культуру.
        </Description>

        <SizedBox height={'5rem'} />

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
)

export default HeaderContent
