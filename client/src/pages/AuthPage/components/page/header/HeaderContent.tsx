import duckLogo from '@assets/company_logo.png'
import { PHONE, PHONE_EXTENDED, TABLET, whiteDarken1 } from '@theme/constants'
import React from 'react'
import styled from 'styled-components'

export const HeaderContentWrapper = styled.div`
    background-image: url(${duckLogo});
    background-repeat: no-repeat;
    background-position: 100% 50%;
    background-size: 11rem;

    @media (max-width: ${TABLET}px) {
        background-image: none;
    }
`

export const Header = styled.h1`
    font-size: 3.4rem;

    @media (max-width: ${PHONE_EXTENDED}px) {
        font-size: 4rem;
    }
`

export const Description = styled.p`
    color: ${whiteDarken1};
    font-size: 1.2rem;
    line-height: 1.8rem;

    @media (max-width: ${PHONE}px) {
        font-size: 1.6rem;
        line-height: 2rem;
    }

    @media (max-width: ${PHONE_EXTENDED}px) {
        font-size: 2rem;
        line-height: 2.5rem;
    }
`
