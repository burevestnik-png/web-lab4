import React, { FC } from 'react'
import styled from 'styled-components'

type CircleProps = {
    readonly r: number
}

const StyledCircle = styled.path`
    fill: green;
    stroke: green;
    fill-opacity: 0.3;
`

const Circle: FC<CircleProps> = ({ r }) => {
    const path = `M ${150 - r} 150 A ${r} ${r}, 270, 0, 1, 150 ${
        150 - r
    } L 150 150 Z`
    return <StyledCircle d={path} />
}

export default Circle
