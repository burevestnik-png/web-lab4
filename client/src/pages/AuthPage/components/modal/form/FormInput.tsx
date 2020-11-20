import { TextField } from '@material-ui/core'
import { primaryColor } from '@theme/colorTheme'
import styled from 'styled-components'

const FormInput = styled(TextField)`
    && label.Mui-focused,
    && .MuiInputBase-root,
    && .MuiInputLabel-root {
        color: ${primaryColor};
    }

    && .MuiInput-underline:after {
        border-color: ${primaryColor};
    }

    && .MuiOutlinedInput-notchedOutline {
        border-color: ${primaryColor};
    }

    && .MuiOutlinedInput-notchedOutline:hover {
        border-color: white;
    }

    && .MuiOutlinedInput-root {
        &:hover fieldset,
        &.Mui-focused fieldset {
            border-color: ${primaryColor};
        }
    }
`

export default FormInput
