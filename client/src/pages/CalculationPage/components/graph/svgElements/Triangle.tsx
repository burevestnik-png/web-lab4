import React, { FC } from 'react'
import styled from 'styled-components'

type TriangleProps = {
    readonly r: number
}

const StyledTriangle = styled.polygon`
    fill: blue;
    stroke: blue;
    fill-opacity: 0.3;
`

const Triangle: FC<TriangleProps> = ({ r }) => {
    const points = `${150 + r},150 150,150 150,${150 + 2 * r}`
    return <StyledTriangle points={points} />
}

export default Triangle
