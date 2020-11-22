import { reversedSecondaryColor } from '@theme/colorTheme'
import { transition } from '@theme/constants'
import { appear } from '@utils/keyframes'
import React, { memo } from 'react'
import styled, { keyframes } from 'styled-components'

const dash = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`

const Axis = styled.line`
    stroke: ${reversedSecondaryColor};
    transition: stroke ${transition}s ease-in-out;

    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: ${dash} 3s ease-in-out forwards;
`

const Arrow = styled.polygon`
    opacity: 0;

    fill: ${reversedSecondaryColor};
    stroke: ${reversedSecondaryColor};
    transition: fill ${transition}s ease-in-out;

    animation: ${appear} 1s ease-in-out forwards;
    animation-delay: 1s;
`

const Skeleton = () => {
    return (
        <>
            <Axis x1="0" x2="300" y1="150" y2="150" />
            <Axis x1="150" x2="150" y1="300" y2="0" />
            <Arrow points="150,0 144,15 156,15" />
            <Arrow points="300,150 285,156 285,144" />
        </>
    )
}

export default memo(Skeleton)
