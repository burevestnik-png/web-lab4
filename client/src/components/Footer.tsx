import { primaryColor } from '@theme/colorTheme'
import React from 'react'
import { FunctionComponent } from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.div`
    display: flex;
    align-items: center;

    background-color: #e9eaed;
    height: 5rem;
    justify-content: space-between;
`

const Authors = styled.i`
    text-align: center;
    color: ${primaryColor};
    padding-left: 2rem;
`

const Links = styled.div``

const Footer: FunctionComponent = () => (
    <FooterWrapper>
        <Authors>
            Сделано студентами P3213 <br /> Кулинич Ярославом (aka Yarki) и Егошин(ым) Алексеем
        </Authors>
    </FooterWrapper>
)

export default Footer
