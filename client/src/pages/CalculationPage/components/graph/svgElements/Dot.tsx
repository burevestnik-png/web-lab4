import React, { FC } from 'react'
import styled from 'styled-components'

type DotType = 'SUCCESS' | 'FAIL'

export type DotProps = {
    readonly type: DotType
    readonly x: number
    readonly y: number
    readonly radius?: number
}

const StyledDot = styled.circle`
    fill: black;
    stroke: black;
`

const Dot: FC<DotProps> = ({ y, x, radius = 3 }) => {
    return <StyledDot cx={x} cy={y} radius={radius} />
}

export default Dot
