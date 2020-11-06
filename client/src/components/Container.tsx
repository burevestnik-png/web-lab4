import { primaryColor, secondaryColor } from '@theme/colorTheme'
import { PHONE, TABLET, transition } from '@theme/constants'
import React from 'react'
import styled from 'styled-components'

export interface ContainerProps {
    readonly primaryColor?: boolean
    readonly paddingBottom?: string
    readonly paddingTop?: string
    readonly color?: string
}

export const Container = styled.div<ContainerProps>`
    padding: ${(props) => props.paddingTop || 0} 8rem ${(props) => props.paddingBottom || 0};

    color: ${(props) => {
        if (props.primaryColor || props.color) {
            return 'white'
        }

        return primaryColor
    }};
    background-color: ${(props) => {
        if (props.primaryColor) {
            return primaryColor
        }

        return props.color || secondaryColor
    }};

    transition: all ${transition}s ease-in-out;

    @media (max-width: ${PHONE}px) {
        padding: ${(props) => props.paddingTop || 0} 2rem ${(props) => props.paddingBottom || 0};
    }
`
