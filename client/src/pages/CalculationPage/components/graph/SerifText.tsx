import { reversedSecondaryColor } from '@theme/colorTheme'
import React, { FC } from 'react'
import styled from 'styled-components'

type SerifTextType = 'FLOAT' | 'INT'

type SerifTextProps = {
    readonly type: SerifTextType
}

const StyledSerifText = styled.text`
    fill: ${reversedSecondaryColor};
`

const SerifText: FC<SerifTextProps> = ({ type }) =>
    type === 'FLOAT' ? <StyledSerifText /> : <StyledSerifText />

export default SerifText
