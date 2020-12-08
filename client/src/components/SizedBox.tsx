import { secondaryColor } from '@theme/colorTheme'
import { PHONE, transition } from '@theme/constants'
import React from 'react'
import styled from 'styled-components'

const MEDIA_SCALE = 0.8

export interface SizedBoxProps {
    readonly height?: string
    readonly width?: string
    readonly transparent?: boolean
}

export const SizedBox = styled.div<SizedBoxProps>`
    height: ${(props) => props.height || '100%'};
    width: ${(props) => props.width || '100%'};

    background-color: ${(props) => (props.transparent ? 'transparent' : secondaryColor)};
    transition: all ${transition}s ease-in-out;

    @media (max-width: ${PHONE}px) {
        height: ${(props) => mediaSize(props.height)};
        width: ${(props) => mediaSize(props.width)};
    }
`

const mediaSize = (prop: string): string => {
    return prop == undefined ? '100%' : `${parseInt(prop.match(/\d/g)[0]) * MEDIA_SCALE}rem`
}
