import Button from '@components/Button'
import { primaryColor, secondaryColor } from '@theme/colorTheme'
import React from 'react'
import styled from 'styled-components'

const FormButton = styled(Button)`
    background-color: ${primaryColor};
    color: ${secondaryColor};

    font-size: 0.8rem;

    &:hover {
        background-color: ${secondaryColor};
        color: ${primaryColor};
    }
`

export default FormButton
