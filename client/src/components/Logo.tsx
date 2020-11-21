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

type EmbeddedLogoProps = {
    readonly responsive?: boolean
}

const EmbeddedLogo = styled(Logo)<EmbeddedLogoProps>`
    display: ${(props) => (props.responsive ? 'none' : 'block')};

    @media (max-width: ${PHONE}px) {
        display: block;
    }
`

export type PageLogoProps = {
    readonly type?: 'fixed' | 'embedded'
    readonly responsive?: boolean
}

export const PageLogo: FunctionComponent<PageLogoProps> = ({
    type = 'fixed',
    responsive = false,
}) =>
    responsive ? (
        type == 'fixed' ? (
            <FixedLogo src={logo} />
        ) : (
            <EmbeddedLogo responsive src={logo} />
        )
    ) : (
        <EmbeddedLogo src={logo} />
    )
