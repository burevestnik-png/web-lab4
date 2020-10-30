import duckLogo from '@assets/company_logo.png'
import { whiteDarken1 } from '@theme/constants'
import React from 'react'
import styled from 'styled-components'

export const HeaderContentWrapper = styled.div`
    background-image: url(${duckLogo});
    background-repeat: no-repeat;
    background-position: 100% 50%;
    background-size: 11rem;
`

export const Header = styled.h1`
    font-size: 3.4rem;
`

export const Description = styled.p`
    color: ${whiteDarken1};
    font-size: 1.2rem;
    line-height: 1.8rem;
`
