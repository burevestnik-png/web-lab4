import { primaryColor, secondaryColor } from '@theme/colorTheme'
import React from 'react'
import styled from 'styled-components'

export interface ContainerProps {
    readonly primaryColor: boolean
    readonly paddingBottom?: string
}

const Container = styled.div<ContainerProps>`
    padding: 0 8rem ${(props) => props.paddingBottom || 0};

    color: ${(props) => (props.primaryColor ? 'white' : 'black')};
    background-color: ${(props) => (props.primaryColor ? primaryColor : secondaryColor)};
`

export default Container
