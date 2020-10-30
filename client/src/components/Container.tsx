import { primaryColor, secondaryColor } from '@theme/colorTheme'
import React from 'react'
import styled from 'styled-components'

export interface ContainerProps {
    readonly primaryColor?: boolean
    readonly paddingBottom?: string
    readonly paddingTop?: string
    readonly color?: string
}

const Container = styled.div<ContainerProps>`
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
`

export default Container
