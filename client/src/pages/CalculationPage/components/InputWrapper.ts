import { secondaryColor } from '@theme/colorTheme'
import { TABLET, transition } from '@theme/constants'
import styled from 'styled-components'

const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color: ${secondaryColor};
    transition: all ${transition}s ease-in-out;

    //min-height: calc(100vh - 7.5rem);

    svg {
        margin-right: 10rem;
    }

    @media (max-width: ${TABLET}px) {
        flex-direction: column;

        svg {
            margin: 0 0 2rem;
        }
    }
`

export { InputWrapper }
