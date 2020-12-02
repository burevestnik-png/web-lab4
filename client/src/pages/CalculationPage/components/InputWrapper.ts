import { secondaryColor } from '@theme/colorTheme'
import { transition } from '@theme/constants'
import styled from 'styled-components'

const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color: ${secondaryColor};
    transition: all ${transition}s ease-in-out;

    min-height: calc(100vh - 7.5rem);

    svg {
        margin-right: 10rem;
    }
`

export { InputWrapper }
