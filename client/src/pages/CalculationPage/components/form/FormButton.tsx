import { Button } from '@material-ui/core'
import { primaryColor, reversedSecondaryColor, secondaryColor } from '@theme/colorTheme'
import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const StyledButton = styled(Button)`
    color: ${reversedSecondaryColor} !important;

    &:hover {
        background-color: ${primaryColor} !important;
        color: ${secondaryColor} !important;
    }

    &.checked {
        background-color: ${primaryColor} !important;
        color: ${secondaryColor} !important;
    }
`

type FormButtonProps = {
    readonly onClick: () => void
    readonly value: number
    readonly className: string
}

const FormButton: FunctionComponent<FormButtonProps> = ({
    onClick = () => {},
    value = 0,
    className = '',
}) => {
    return (
        <StyledButton onClick={onClick} value={value} disableElevation className={className}>
            {value}
        </StyledButton>
    )
}

export default FormButton
