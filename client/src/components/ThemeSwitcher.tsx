import { Switch } from '@material-ui/core'
import { primaryColor } from '@theme/colorTheme'
import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const ThemeSwitchWrapper = styled.div`
    && {
        position: fixed;
        top: 1.6rem;
        right: 0.5rem;
        width: 6.5rem;

        display: flex;
        align-items: center;

        user-select: none;
    }
`

const ThemeSwitch = styled(Switch)`
    .Mui-checked,
    .MuiIconButton-label {
        color: ${primaryColor};
    }

    && .Mui-checked + .MuiSwitch-track {
        background-color: ${primaryColor};
    }
`

const ThemeSwitchBlock: FunctionComponent = () => (
    <ThemeSwitchWrapper>
        <span>&#127774;</span>
        <ThemeSwitch />
        <span>&#127770;</span>
    </ThemeSwitchWrapper>
)

export default ThemeSwitchBlock
