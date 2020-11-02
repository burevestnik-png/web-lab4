import { primaryColor } from '@theme/colorTheme'
import styled from 'styled-components'

const FormInput = styled.input`
    border: 1px solid ${primaryColor};
    border-radius: 3px;
    width: calc(100% - 6rem);
`

export default FormInput
