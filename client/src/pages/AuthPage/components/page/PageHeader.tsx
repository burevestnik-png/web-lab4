import React from 'react'
import styled from 'styled-components'
import { primaryColor } from '@theme/index'

const Header = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    height: 6rem;

    a + a {
        margin-left: 1rem;
    }
`

const HeaderItem = styled.a`
    text-decoration: none;
    color: ${primaryColor};
`

const PageHeader = () => (
    <Header>
        <HeaderItem href="#">Вычисления</HeaderItem>
        <HeaderItem>Проекты</HeaderItem>
        <HeaderItem>Контакты</HeaderItem>
    </Header>
)

export default PageHeader
