import logo from '@assets/logo.png'
import { PHONE } from '@theme/constants'
import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const Logo = styled.img`
    height: 6rem;
`

const FixedLogo = styled(Logo)`
    position: fixed;
    left: 1rem;

    @media (max-width: ${PHONE}px) {
        display: none;
    }
`

const EmbeddedLogo = styled(Logo)`
    display: none;

    @media (max-width: ${PHONE}px) {
        display: block;
    }
`

export type PageLogoProps = {
    readonly type?: 'fixed' | 'embedded'
}

export const PageLogo: FunctionComponent<PageLogoProps> = ({ type = 'fixed' }) =>
    type == 'fixed' ? <FixedLogo src={logo} /> : <EmbeddedLogo src={logo} />
