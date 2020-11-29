import { reversedSecondaryColor } from '@theme/colorTheme'
import React, { FC } from 'react'
import styled from 'styled-components'

export type SerifTextType = 'FLOAT' | 'INT' | 'CUSTOM'
type AxisType = 'AxisX' | 'AxisY'

type SerifTextProps = {
    readonly type: SerifTextType
    readonly axisType?: AxisType
    readonly value: string
    readonly negativePrefix?: boolean
    readonly fontSize?: number
    readonly x?: number
    readonly y?: number
}

const StyledSerifText = styled.text`
    fill: ${reversedSecondaryColor};
`

const SerifText: FC<SerifTextProps> = ({
    type,
    axisType,
    fontSize = 1,
    value,
    x,
    y,
    negativePrefix,
}) => {
    const content = negativePrefix ? `-${value}` : value

    const commonAxisXProps = {
        y: 140,
        fontSize: `${fontSize}rem`,
    }

    const commonAxisYProps = {
        x: 160,
        fontSize: `${fontSize}rem`,
        y: y + 5,
    }

    if (type === 'CUSTOM') {
        return (
            <StyledSerifText x={x} y={y}>
                {content}
            </StyledSerifText>
        )
    }

    switch (axisType) {
        case 'AxisX':
            return type === 'INT' ? (
                <StyledSerifText x={x - 7} {...commonAxisXProps}>
                    {content}
                </StyledSerifText>
            ) : (
                <StyledSerifText x={x - 13} {...commonAxisXProps}>
                    {content}
                </StyledSerifText>
            )
        case 'AxisY':
            return (
                <StyledSerifText {...commonAxisYProps}>
                    {content}
                </StyledSerifText>
            )
    }
}

export default SerifText
