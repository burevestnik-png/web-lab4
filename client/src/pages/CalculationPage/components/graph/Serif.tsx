import { reversedSecondaryColor } from '@theme/colorTheme'
import React, { FC } from 'react'
import styled from 'styled-components'

type SerifType = 'AxisX' | 'AxisY'

type SerifProps = {
    readonly type: SerifType
    readonly x?: number
    readonly y?: number
}

const StyledSerif = styled.line`
    stroke: ${reversedSecondaryColor};
`

const Serif: FC<SerifProps> = ({ type, x, y }) =>
    type === 'AxisX' ? (
        <StyledSerif x1={x} x2={x} y1={155} y2={145} />
    ) : (
        <StyledSerif x1={145} x2={155} y1={y} y2={y} />
    )

export default Serif
