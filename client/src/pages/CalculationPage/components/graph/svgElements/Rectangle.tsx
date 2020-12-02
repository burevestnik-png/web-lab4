import React, { FC } from 'react'
import styled from 'styled-components'

type RectangleProps = {
    readonly r: number
}

const StyledRectangle = styled.polygon`
    fill: yellow;
    stroke: yellow;
    fill-opacity: 0.3;
`

const Rectangle: FC<RectangleProps> = ({ r }) => {
    const points = `150,150 ${150 + r},150 ${150 + r},${150 - 2 * r} 150,${
        150 - 2 * r
    }`
    return <StyledRectangle points={points} />
}

export default Rectangle
