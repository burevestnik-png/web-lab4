import { Switch as MaterialSwitch } from '@material-ui/core'
import { primaryDark, primaryLight } from '@theme/constants'
import styled from 'styled-components'

interface SwitchProps {
    readonly theme: ColorThemeMode
    readonly isHeader?: boolean
}

const Switch = styled(MaterialSwitch)<SwitchProps>`
    .Mui-checked,
    .MuiIconButton-label {
        color: ${(props) => {
            if (props.theme == 'light') {
                return props.isHeader ? primaryDark : primaryLight
            } else {
                return primaryDark
            }
        }};
    }

    && .Mui-checked + .MuiSwitch-track {
        background-color: ${(props) => (props.theme == 'light' ? primaryLight : primaryDark)};
    }

    && .MuiSwitch-colorSecondary.Mui-checked {
        color: ${(props) => (props.theme == 'light' ? primaryLight : primaryDark)};
    }
`

export default Switch
