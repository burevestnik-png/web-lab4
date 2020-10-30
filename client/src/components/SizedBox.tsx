import { secondaryColor } from '@theme/colorTheme'
import React from 'react'
import styled from 'styled-components'

export interface SizedBoxProps {
    readonly height?: string
    readonly width?: string
    readonly transparent?: boolean
}

const SizedBox = styled.div<SizedBoxProps>`
    height: ${(props) => props.height || '100%'};
    width: ${(props) => props.width || '100%'};

    background-color: ${(props) => (props.transparent ? 'transparent' : secondaryColor)};
`

export default SizedBox
