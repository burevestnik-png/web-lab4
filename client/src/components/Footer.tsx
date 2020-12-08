import { blackLighten1, PHONE } from '@theme/constants'
import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.div`
    display: flex;
    align-items: center;

    background-color: ${blackLighten1};
    height: 5rem;
    justify-content: space-between;
`

const Authors = styled.i`
    text-align: center;
    color: white;
    padding-left: 2rem;

    @media (max-width: ${PHONE}px) {
        font-size: 1.2rem;
    }
`

export const Footer: FunctionComponent = () => (
    <FooterWrapper>
        <Authors>
            Сделано студентами P3213 <br /> Кулинич Ярославом (aka Yarki) и Егошин(ым) Алексеем
        </Authors>
    </FooterWrapper>
)
