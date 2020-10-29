import React from 'react'
import styled from 'styled-components'

export interface SizedBoxProps {
    readonly height?: string
    readonly width?: string
}

const SizedBox = styled.div<SizedBoxProps>`
    height: ${(props) => props.height || '100%'};
    width: ${(props) => props.width || '100%'};
`

export default SizedBox
