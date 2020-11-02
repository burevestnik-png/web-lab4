import { primaryColor, secondaryColor } from '@theme/colorTheme'
import styled from 'styled-components'

export interface ButtonProps {
    readonly fontSize?: number
}

const Button = styled.button<ButtonProps>`
    color: ${primaryColor};
    background: ${secondaryColor};
    border: 1px solid ${primaryColor};

    transition: 0.3s;
    border-radius: 30px;
    font-size: ${(props) => `${props.fontSize}rem` ?? '1rem'};
    cursor: pointer;
    padding: 10px 40px;
    font-weight: bold;
    text-transform: uppercase;

    &:hover {
        background-color: ${primaryColor};
        color: ${secondaryColor};
    }

    &:active {
        transform: scale(0.95);
    }

    &:focus {
        outline: none;
    }
`

export default Button
